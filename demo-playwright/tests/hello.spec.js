// @ts-check
const { test, expect } = require("@playwright/test");

test("Hello page", async ({ page }) => {
  await page.route("https://demo-backend-nodejs.vercel.app", async (route) => {
    const json = { message: "XYZ" };
    // Sleep for 1 second
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await route.fulfill(
        {
            json
        }
    );
  });

  await page.goto("https://demo-frontend-reactjs.vercel.app");
  // sleep for 1 second
  await page.waitForTimeout(1000);
  const text = await page.getByTestId("hello_text").textContent();
  expect(text).toBe("XYZ");

  const locator = page.getByTestId("hello_text");
  await expect(locator).toHaveText("XYZ");
});
