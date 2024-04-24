import { Page } from 'playwright';
import { fillLoginForm } from '@interactions/UserInteractions';

export const loginWithCredentials = async (username: string, password: string, page: Page) => {
    // Wait for login box to be visible
    const loginBox = page.locator('.login-box');
    await loginBox.waitFor();

    // check if username and password are visible
    const usernameInput = loginBox.locator('input[type="text"][data-test="username"]');
    await usernameInput.waitFor();
    const passwordInput = loginBox.locator('input[type="password"][data-test="password"]');
    await passwordInput.waitFor();

    // Fill username and password
    await fillLoginForm(username, password, page);
};