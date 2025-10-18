import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {
    // 1 Go to Playwright's homepage
    await page.goto('https://playwright.dev/');

    // 2 Assert that the title contains "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
});
