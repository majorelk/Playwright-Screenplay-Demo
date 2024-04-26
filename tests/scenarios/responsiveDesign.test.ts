import { test, expect } from '@playwright/test';
import { Navigate } from '../tasks/Navigate'; // Import the missing 'Navigate' export
import { Login } from '@tasks/Login';
import { Actor } from '@actors/Actor';
import { users } from '@utils/Users';

test.describe('Responsive Design Tests', () => {
    test('UI adjusts for mobile view', async ({ page }) => {
        const actor = Actor.named('Standard User', page);

        await page.setViewportSize({ width: 375, height: 667 }); // iPhone 6/7/8 size
        
        Navigate.toHomePage

        await actor.perform(Navigate.toLoginPage); // Remove the 'page' parameter
        await actor.perform(Login.withCredentials(users.standard.username, users.standard.password, page));

        expect(await page.locator('.menu-button').isVisible()).toBeTruthy();
    });
});
