// Combines login page interactions
import { Page } from 'playwright';

export const fillLoginForm = async (username: string, password: string, page: Page) => {
    try {
        await page.fill('#user-name', username);
        await page.fill('#password', password);
        await page.click('#login-button');
    } catch (error) {
        console.error("Login form interaction failed", error);
        throw new Error(`Failed to interact with the login form: ${error.message}`);
    }
};