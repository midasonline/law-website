import { test, expect } from "@playwright/test";

for (const width of [375, 390, 768, 1366, 1440, 1920, 2560]) {
  test(`landing page fits and loads its assets at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Legal advice made simple.");

    for (const section of await page.locator("main > section, footer").all()) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
    }
    await expect.poll(() => page.evaluate(() => [...document.images]
      .filter((image) => image.getClientRects().length > 0)
      .every((image) => image.complete && image.naturalWidth > 0))).toBe(true);

    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const brandFits = await page.locator('[aria-label="Lawvia and Partners"]').evaluate((element) => {
      const range = document.createRange();
      range.selectNodeContents(element);
      return range.getBoundingClientRect().right <= element.getBoundingClientRect().right + 1;
    });
    expect(brandFits).toBe(true);
    for (const line of await page.locator(".expertise-line").all()) {
      const positions = await line.locator(".expertise-character").evaluateAll((letters) => letters.map((letter) => letter.getBoundingClientRect().y));
      expect(Math.max(...positions) - Math.min(...positions)).toBeLessThan(1);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    for (const word of await page.locator('section [data-node-id="23:2443"], section [data-node-id="23:2815"], section [data-node-id="9:1250"], section [data-node-id="9:1253"]').all()) {
      const rect = await word.boundingBox();
      expect(rect).not.toBeNull();
      expect(rect!.x).toBeGreaterThanOrEqual(0);
      expect(rect!.x + rect!.width).toBeLessThanOrEqual(width + 1);
      await expect(word).not.toHaveCSS("color", "rgb(6, 6, 6)");
    }
    expect(errors).toEqual([]);
    if ([390, 1440, 1920].includes(width)) {
      await page.screenshot({ path: `.design-reference/landing-${width}.png`, fullPage: true });
    }
  });
}

test("consultation and insight dialogs support keyboard dismissal and focus return", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Book Consultation ↗", exact: true });
  await trigger.click();
  const consultation = page.getByRole("dialog");
  await expect(consultation).toBeVisible();
  await consultation.getByLabel("Your name").fill("Sample Visitor");
  await consultation.getByLabel("Email address").fill("visitor@example.com");
  await consultation.getByLabel("How can we help?").fill("I would like to arrange a consultation.");
  await expect(consultation.getByRole("button", { name: "Continue in your email app" })).toBeEnabled();
  await page.keyboard.press("Escape");
  await expect(consultation).toHaveCount(0);
  await expect(trigger).toBeFocused();

  await page.getByRole("button", { name: /Read The First Steps/ }).click();
  const article = page.getByRole("dialog");
  await expect(article.getByRole("heading", { name: "The First Steps in a Corporate Transaction" })).toBeVisible();
  await article.getByRole("button", { name: "Close dialog" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("mobile navigation reaches sections and closes after selection", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  const navigation = page.getByRole("navigation", { name: "Mobile navigation", exact: true });
  await expect(navigation).toBeVisible();
  await navigation.getByRole("link", { name: "Practice Areas", exact: true }).click();
  await expect(navigation).toHaveCount(0);
  await expect(page).toHaveURL(/#practice$/);
  await expect(page.getByRole("heading", { name: "Our areas of expertise" })).toBeInViewport();
});

test("desktop hero completes the supplied two-second animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const logo = page.locator('[data-node-id="23:3"]');
  await expect.poll(async () => Math.round((await logo.boundingBox())!.width)).toBe(344);
  const expectedPositions = [{ id: "23:2443", x: 433 }, { id: "23:2815", x: 703 }, { id: "9:1250", x: 432 }, { id: "9:1253", x: 686 }];
  for (const item of expectedPositions) {
    const rect = await page.locator(`[data-node-id="${item.id}"]`).boundingBox();
    expect(Math.abs(rect!.x - item.x)).toBeLessThan(2);
  }
  await page.screenshot({ path: ".design-reference/hero-animation-complete.png" });
});
