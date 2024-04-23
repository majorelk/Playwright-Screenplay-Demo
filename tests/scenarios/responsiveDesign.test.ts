import { test, expect } from '@playwright/test';
import { Actor } from '../actors/Actor';
import { Navigate } from '../interactions/Navigate'; // Import the missing 'Navigate' export
import { getCartContents } from '../questions/CartContents';

test.describe('Responsive Design Tests', () => {
    test('UI adjusts for mobile view', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 size
        
        Navigate.toHomePage

        expect(await page.locator('.menu-button').isVisible()).toBeTruthy();
    });
});
