import { Page } from 'playwright';

// This is an Interaction, a building block for Tasks.
export const goToLoginPage = async (page: Page) => {
    await page.goto('https://www.saucedemo.com');
};

export const enterUsername = (username: string) => async (page: Page) => {
    await page.fill('#user-name', username);
};

export const enterPassword = (password: string) => async (page: Page) => {
    await page.fill('#password', password);
};

export const clickLogin = async (page: Page) => {
    await page.click('#login-button');
};

// Composite Task using Interactions
export class Login {
    static withCredentials(username: string, password: string) {
        return async (page: Page) => {
            await goToLoginPage(page);
            await enterUsername(username)(page);
            await enterPassword(password)(page);
            await clickLogin(page);
        };
    }
}
