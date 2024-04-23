import { test, expect } from '@playwright/test';
import { Actor } from '@actors/Actor';
import { LoginTask } from '@tasks/LoginTask';
import { canSeePageTitle } from '@questions/PageQuestions';
import { Navigate } from '@interactions/Navigate';
import { users } from '@utils/Users';

test.describe('Login Functionality Tests', () => {
    test('Standard user can log in successfully', async ({ page }) => {
        const actor = Actor.named('Standard User', page);
        await actor.perform(Navigate.toLoginPage); // Remove the 'page' parameter
        await actor.perform(LoginTask.loginWithCredentials(users.standard.username, users.standard.password));
        const title = await actor.ask(canSeePageTitle);

        expect(title).toBe('Swag Labs');
    });

    test('Locked out user cannot log in', async ({ page }) => {
        const actor = Actor.named('Locked Out User', page);

        // Navigate and login
        await actor.perform(Navigate.toLoginPage);
        await actor.perform(LoginTask.loginWithCredentials(users.lockedOut.username, users.lockedOut.password));

        // Check for error message
        const errorMessage = await page.locator('.error-message-container').textContent();
        expect(errorMessage).toContain('Sorry, this user has been locked out.');
    });
    
    test('Performance glitch user experiences slow login', async ({ page }) => {
        const actor = Actor.named('Performance glitch user', page);

        await Navigate.toLoginPage(page);

        const startTime = performance.now();

        // Setting a longer timeout specifically for this user's interactions
        page.setDefaultTimeout(15000); // Extending timeout for all actions on this page

        await actor.perform(LoginTask.loginWithCredentials(users.performanceGlitch.username, users.performanceGlitch.password));
        const endTime = performance.now();
        // Wait for the network to be idle before clicking
        const title = await actor.ask(() => canSeePageTitle(page));
        expect(title).toBe('Swag Labs');

        const loginDuration = endTime - startTime;
        expect(loginDuration).toBeGreaterThan(1000); // Assuming performance glitch user takes over a second to log in
    });

    test('Incorrect username and or password displays an error message', async ({ page }) => {
        const actor = Actor.named('Incorrect User', page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Perform login with incorrect credentials
        await actor.perform(LoginTask.loginWithCredentials(users.standard.username, 'incorrectPassword'));

        // Check for the error message
        const errorMessage = await page.locator('.error-message-container.error h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Username and password do not match any user in this service');
    });

    test('Displays error when username is missing', async ({ page }) => {
        const actor = Actor.named('Missing Username User', page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Attempt to log in with no username and a dummy password
        await actor.perform(LoginTask.loginWithCredentials('', 'dummyPassword'));

        // Check for the username missing error message
        const errorMessage = await page.locator('.error-message-container.error h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Username is required');
    });

    test('Displays error when password is missing', async ({ page }) => {
        const actor = Actor.named('Missing Password User', page);

        // Navigate to the login page
        await Navigate.toLoginPage(page);

        // Attempt to log in with a dummy username and no password
        await actor.perform(LoginTask.loginWithCredentials(users.standard.username, ''));

        // Check for the password missing error message
        const errorMessage = await page.locator('h3[data-test="error"]').textContent();
        expect(errorMessage).toContain('Password is required');
    });
});
