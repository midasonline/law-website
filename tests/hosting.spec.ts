import { expect, test } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

for (const profile of [{ name: "desktop", width: 1440, height: 1000, dpr: 1 }, { name: "mobile-retina", width: 390, height: 844, dpr: 2 }]) {
  test(`${profile.name} uses only small static assets and no image service`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: profile.width, height: profile.height }, deviceScaleFactor: profile.dpr, reducedMotion: "reduce" });
    try {
      const page = await context.newPage();
      const requests: string[] = [];
      const responses: Promise<{ url: string; bytes: number; status: number; cache: string }>[] = [];
      page.on("request", (request) => requests.push(request.url()));
      page.on("response", (response) => responses.push((async () => {
        const headers = await response.allHeaders();
        return { url: response.url(), bytes: Number(headers["content-length"] || 0), status: response.status(), cache: headers["cache-control"] || "" };
      })()));

      await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
      for (const section of await page.locator("main > section, footer").all()) {
        await section.scrollIntoViewIfNeeded();
        await page.waitForTimeout(100);
      }
      await page.waitForLoadState("networkidle");
      await expect.poll(() => page.evaluate(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0))).toBe(true);

      const assets = await Promise.all(responses);
      const rawBytes = assets.reduce((total, asset) => total + asset.bytes, 0);
      expect(requests.every((url) => new URL(url).origin === "http://127.0.0.1:3000")).toBe(true);
      expect(requests.some((url) => /\/(?:_next|_vercel)\/image\?|\/api\//.test(url))).toBe(false);
      expect(assets.every((asset) => asset.status === 200)).toBe(true);
      expect(requests.length).toBeLessThanOrEqual(30);
      expect(rawBytes).toBeLessThan(2.5 * 1024 * 1024);
      const images = assets.filter((asset) => new URL(asset.url).pathname.startsWith("/media/"));
      expect(images.length).toBeGreaterThan(0);
      expect(images.every((asset) => asset.cache.includes("max-age=31536000") && asset.cache.includes("immutable"))).toBe(true);

      const report = { profile, requests: requests.length, rawBytes, images: images.map((asset) => ({ path: new URL(asset.url).pathname, bytes: asset.bytes })) };
      await mkdir(".design-reference", { recursive: true });
      await writeFile(`.design-reference/network-${profile.name}.json`, JSON.stringify(report, null, 2));
      await test.info().attach("hosting-usage", { body: JSON.stringify(report, null, 2), contentType: "application/json" });
    } finally {
      await context.close();
    }
  });
}
