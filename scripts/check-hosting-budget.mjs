import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { brotliCompressSync } from "node:zlib";

const root = process.cwd();
const output = path.join(root, "out");
const maxDeploymentBytes = 8 * 1024 * 1024;
const maxImageBytes = 750 * 1024;
const maxCompressedJavaScriptBytes = 300 * 1024;
const hosting = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
assert.equal(hosting.framework, null, "Vercel must serve a static export (Other preset).");
assert.equal(hosting.outputDirectory, "out");
assert.ok(!hosting.functions && !hosting.images && !hosting.rewrites, "Do not add runtime functions, an image service, or proxy rewrites.");

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(filename));
    else files.push({ filename, bytes: (await stat(filename)).size });
  }
  return files;
}

await readFile(path.join(output, "index.html"), "utf8");
const files = await walk(output);
let compressedJavaScriptBytes = 0;
for (const file of files) {
  const relative = path.relative(output, file.filename);
  if (relative.endsWith(".html")) {
    const html = await readFile(file.filename, "utf8");
    assert.ok(!/\/(?:_next|_vercel)\/image\?/.test(html), `${relative} must not call a runtime image optimizer.`);
  }
  assert.ok(!relative.split(path.sep).some((part) => part.endsWith(".func") || part === "functions"), "No server function bundles may be deployed.");
  if (/\.(?:png|jpe?g|webp|avif)$/i.test(relative)) {
    assert.ok(file.bytes <= maxImageBytes, `${relative} exceeds the 750 KiB per-image budget.`);
  }
  if (relative.endsWith(".js")) compressedJavaScriptBytes += brotliCompressSync(await readFile(file.filename)).length;
}
const deploymentBytes = files.reduce((sum, file) => sum + file.bytes, 0);
assert.ok(deploymentBytes <= maxDeploymentBytes, "Static deployment exceeds the 8 MiB budget.");
assert.ok(compressedJavaScriptBytes <= maxCompressedJavaScriptBytes, "Client JavaScript exceeds the 300 KiB Brotli budget.");
assert.ok(files.filter((file) => /[\\/]images[\\/].*\.(?:png|jpe?g)$/i.test(file.filename)).length === 0, "Original raster images must stay outside the public deployment.");

console.log(JSON.stringify({
  deploymentBytes,
  deploymentBudgetBytes: maxDeploymentBytes,
  files: files.length,
  compressedJavaScriptBytes,
  runtimeFunctions: 0,
  runtimeImageOptimizer: false,
  largestFiles: files.sort((a, b) => b.bytes - a.bytes).slice(0, 5).map((file) => ({ path: path.relative(output, file.filename), bytes: file.bytes })),
}, null, 2));
