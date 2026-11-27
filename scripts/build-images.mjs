import { createHash } from "node:crypto";
import { access, mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDirectory = path.join(root, "public", "media");
const manifestPath = path.join(root, "src", "lib", "generated", "image-manifest.json");
const images = [
  { name: "legal-consultation", widths: [384, 640, 960, 1280, 1920, 2560] },
  { name: "team", widths: [384, 640, 960, 1280, 1920, 2560] },
  { name: "insight-team", widths: [384, 640, 960, 1280, 1920, 2560] },
  { name: "insight-procedure", extension: "jpg", widths: [384, 640, 960, 1280, 1920, 2560] },
  { name: "insight-analysis", extension: "jpg", widths: [384, 640, 960, 1280, 1920, 2560] },
  { name: "insight-transaction", widths: [384, 640, 960] },
  { name: "footer-background", widths: [384, 640, 960, 1280] },
  { name: "lawvia-logo", widths: [128, 256, 384, 640, 1024], lossless: true },
  { name: "lawvia-monogram", widths: [128, 256, 384, 640, 1024], lossless: true },
];

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });
const manifest = {};
const activeFiles = new Set();
let sourceBytes = 0;
let outputBytes = 0;

for (const image of images) {
  const sourceName = `${image.name}.${image.extension || "png"}`;
  const source = await readFile(path.join(root, "assets", "images", sourceName));
  const metadata = await sharp(source).metadata();
  if (!metadata.width) throw new Error(`Missing dimensions: ${image.name}`);
  sourceBytes += source.length;
  const widths = [...new Set(image.widths.map((width) => Math.min(width, metadata.width)))].sort((a, b) => a - b);
  const options = { quality: 82, effort: 5, lossless: image.lossless ?? false, smartSubsample: true };
  manifest[`/images/${sourceName}`] = [];

  for (const width of widths) {
    const hash = createHash("sha256").update(source).update(JSON.stringify({ width, options, version: 1 })).digest("hex").slice(0, 12);
    const filename = `${image.name}-${width}-${hash}.webp`;
    const destination = path.join(outputDirectory, filename);
    try {
      await access(destination);
    } catch {
      await sharp(source).resize({ width, withoutEnlargement: true }).webp(options).toFile(destination);
    }
    activeFiles.add(filename);
    outputBytes += (await stat(destination)).size;
    manifest[`/images/${sourceName}`].push({ width, src: `/media/${filename}` });
  }
}

// This directory is generated and contains no originals. Remove obsolete variants
// so changing a source image cannot grow every subsequent deployment indefinitely.
for (const filename of await readdir(outputDirectory)) {
  const destination = path.resolve(outputDirectory, filename);
  if (path.dirname(destination) !== outputDirectory) throw new Error("Invalid generated image path");
  if (/^[a-z-]+-\d+-[a-f0-9]{12}\.webp$/.test(filename) && !activeFiles.has(filename)) {
    await unlink(destination);
  }
}

const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
let previous = "";
try { previous = await readFile(manifestPath, "utf8"); } catch { /* First build. */ }
if (previous !== serialized) await writeFile(manifestPath, serialized);
console.log(JSON.stringify({ originalImageBytes: sourceBytes, responsiveImageBytes: outputBytes, variants: activeFiles.size }, null, 2));
