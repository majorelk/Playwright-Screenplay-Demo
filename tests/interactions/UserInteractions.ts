// Combines login page interactions
import { Page } from 'playwright';

export const fillLoginForm = async (username: string, password: string, page: Page) => {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
};

