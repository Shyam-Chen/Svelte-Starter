import { test, expect } from '@playwright/test';

test('Sign-in', async ({ page }) => {
  await page.goto('/');
});
