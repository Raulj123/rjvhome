import { expect, test } from '@playwright/test';

test('Svelte app loads', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.waitForTimeout(2000);
	const isContentPresent = await page.isVisible('.main');
	expect(isContentPresent).toBeTruthy();
  });
  
  