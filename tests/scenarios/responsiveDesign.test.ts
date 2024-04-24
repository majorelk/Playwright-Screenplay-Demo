import { test, expect } from '@playwright/test';
import { Navigate } from '../tasks/Navigate'; // Import the missing 'Navigate' export
import { LoginTask } from '@tasks/Login';
import { Actor } from '@actors/Actor';

test.describe('Responsive Design Tests', () => {
    test('UI adjusts for mobile view', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 size
        
        Navigate.toHomePage

        await actor.perform(LoginTask.loginWithCredentials('standard_user'));

        expect(await page.locator('.menu-button').isVisible()).toBeTruthy();
    });
});
