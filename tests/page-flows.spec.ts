import { expect, test } from "@playwright/test";

for (const plan of [{ id: "basic", name: "Basic Plan", price: "$120.25" }, { id: "standard", name: "Standard Rate", price: "$230.45" }, { id: "premium", name: "Premium Rate", price: "$500.00" }]) {
  test(`${plan.name} remains selected from pricing through contact and reload`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/pricing/");
    await page.getByRole("button", { name: `Choose ${plan.name}`, exact: true }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog.getByRole("heading", { name: plan.name, exact: true })).toBeVisible();
    await expect(dialog.getByText(`${plan.price}/case`, { exact: true })).toBeVisible();
    await dialog.getByRole("link", { name: "Arrange this consultation ↗" }).click();
    await expect(page).toHaveURL(new RegExp(`/contact/\\?plan=${plan.id}$`));
    await expect(page.getByRole("heading", { name: plan.name, exact: true })).toBeVisible();
    const email = page.getByRole("link", { name: "Book by email ↗" });
    expect(decodeURIComponent((await email.getAttribute("href")) || "")).toContain(`${plan.name} consultation — ${plan.price}/case`);
    await page.reload();
    await expect(page.getByRole("heading", { name: plan.name, exact: true })).toBeVisible();
  });
}

test("unknown package query uses the free consultation", async ({ page }) => {
  await page.goto("/contact/?plan=unknown");
  await expect(page.getByRole("heading", { name: "Free Initial Consultation", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Book by email ↗" })).toHaveAttribute("href", "mailto:contact@lawvia.com?subject=Free%20initial%20consultation");
});

test("insight preview can open the consultation dialog without stacking dialogs", async ({ page }) => {
  await page.goto("/insights/");
  await page.getByRole("button", { name: "Preview Navigating Legal Challenges and Opportunities", exact: true }).click();
  const preview = page.getByRole("dialog");
  await expect(preview.getByRole("heading", { name: "Navigating Legal Challenges and Opportunities", exact: true })).toBeVisible();
  await preview.getByRole("button", { name: "Discuss this topic with our team" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(1);
  await expect(page.getByRole("dialog").getByLabel("How can we help?")).toHaveValue(/Navigating Legal Challenges and Opportunities/i);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("mobile navigation connects the inner pages and practice links", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/about/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation", exact: true }).getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/contact\/$/);
  await page.getByRole("link", { name: "Health Care Law ↗", exact: true }).click();
  await expect(page).toHaveURL(/\/practice-areas\/#health-care-law$/);
  await expect(page.locator("#health-care-law")).toBeInViewport();
});
