import { test, expect } from '@playwright/test';
import { Actor } from '@actors/Actor';
import { LoginTask } from '@tasks/LoginTask';
import { getPageTitle } from '@questions/PageQuestions';
import { Navigate } from '@interactions/Navigate';

test.describe('Login Functionality Tests', () => {
    test('Standard user can log in successfully', async ({ page }) => {
        const actor = new Actor(page);

        await Navigate.toLoginPage(page);

        await actor.perform(LoginTask.loginWithCredentials('standard_user'));

        const title = await actor.ask(() => getPageTitle(page));

        expect(title).toBe('Swag Labs');
    });

    test('Locked out user cannot log in', async ({ page }) => {
        const actor = new Actor(page);

        // Navigate and login
        await Navigate.toLoginPage(page);
        await actor.perform(LoginTask.loginWithCredentials('locked_out_user'));

        // Check for error message
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Sorry, this user has been locked out.');
    });
    
    test('Performance glitch user experiences slow login', async ({ page }) => {
        const actor = new Actor(page);

        await Navigate.toLoginPage(page);

        const startTime = performance.now();
        await actor.perform(LoginTask.loginWithCredentials('performance_glitch_user'));
        const endTime = performance.now();

        const title = await actor.ask(() => getPageTitle(page));
        expect(title).toBe('Swag Labs');

        const loginDuration = endTime - startTime;
        expect(loginDuration).toBeGreaterThan(1000); // Assuming performance glitch user takes over a second to log in
    });

    test('Incorrect username or password displays an error message', async ({ page }) => {
        const actor = new Actor(page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Perform login with incorrect credentials
        await actor.perform(LoginTask.loginWithCredentials('incorrect_user', 'wrong_password'));

        // Check for the error message
        const errorMessage = await page.locator('.error-message-container.error h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Username and password do not match any user in this service');
    });

    test('Displays error when username is missing', async ({ page }) => {
        const actor = new Actor(page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Attempt to log in with no username and a dummy password
        await actor.perform(LoginTask.loginWithCredentials('', 'dummyPassword'));

        // Check for the username missing error message
        const errorMessage = await page.locator('.error-message-container.error h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Username is required');
    });

    test('Displays error when password is missing', async ({ page }) => {
        const actor = new Actor(page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Attempt to log in with a dummy username and no password
        await actor.perform(LoginTask.loginWithCredentials('dummyUser', ''));

        // Check for the password missing error message
        const errorMessage = await page.locator('h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Password is required');
    });
});
