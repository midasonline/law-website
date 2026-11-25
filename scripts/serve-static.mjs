import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

// Local preview only. Vercel deploys out/ directly and never runs this server.
const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".ico": "image/x-icon" };

createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method || "")) { response.writeHead(405).end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url || "/", "http://localhost").pathname); }
  catch { response.writeHead(400).end(); return; }
  let filename = path.resolve(root, `.${pathname}`);
  if (filename !== root && !filename.startsWith(`${root}${path.sep}`)) { response.writeHead(403).end(); return; }
  let status = 200;
  try {
    if ((await stat(filename)).isDirectory()) filename = path.join(filename, "index.html");
    await stat(filename);
  } catch {
    status = 404;
    filename = path.join(root, "404.html");
  }
  try {
    const file = await stat(filename);
    response.writeHead(status, {
      "Content-Type": types[path.extname(filename)] || "application/octet-stream",
      "Content-Length": file.size,
      "Cache-Control": pathname.startsWith("/media/") || pathname.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
    });
    if (request.method === "HEAD") response.end();
    else createReadStream(filename).pipe(response);
  } catch { response.writeHead(404).end("Run npm run build first."); }
}).listen(port, "127.0.0.1", () => console.log(`Static preview: http://127.0.0.1:${port}`));
