// Combines login page interactions
import { Page } from 'playwright';

export const fillLoginForm = async (page: Page, username: string, password: string) => {
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
};

