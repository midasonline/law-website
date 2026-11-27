import { expect, test } from "@playwright/test";

for (const width of [390, 768, 1440, 1920, 2560]) {
  test(`About page renders and fits at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 1000 });
    const response = await page.goto("/about/");
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("We Are the Leading Law Firm For Annual Revenues");
    await expect(page.getByRole("heading", { name: "Excellence. At every step." })).toBeVisible();
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect.poll(() => page.evaluate(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
    if ([390, 1440].includes(width)) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `.design-reference/about-${width}.png`, fullPage: true });
    }
  });
}

test("About navigation and consultation work", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "About", exact: true })).toHaveAttribute("aria-current", "page");
  await page.getByRole("button", { name: "Book Free Consultation ↗", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.getByRole("link", { name: "Back to top ↑" }).click();
  await expect(page.locator("header")).toBeInViewport();
});
