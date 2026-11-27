import { expect, test } from "@playwright/test";

const pages = [
  { path: "/practice-areas/", title: "Protection Of Right To Life & Personal Liberty" },
  { path: "/attorneys/", title: "Meet the Minds Behind Every Verdict" },
  { path: "/pricing/", title: "We Are Here To Help You Get Relief" },
  { path: "/insights/", title: "Latest News And Insights" },
  { path: "/contact/", title: "Trusted Legal Representation When It Matters" },
];

for (const route of pages) {
  for (const width of [390, 768, 1440, 1920, 2560]) {
    test(`${route.path} fits at ${width}px`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 1000 });
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.title);
      for (const section of await page.locator("main > section").all()) await section.scrollIntoViewIfNeeded();
      await expect.poll(() => page.evaluate(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
      if ([390, 1440].includes(width)) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: `.design-reference/${route.path.replaceAll("/", "")}-${width}.png`, fullPage: true });
      }
    });
  }
}
