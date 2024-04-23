// tests/interactions/Navigation.ts
import { Page } from 'playwright';

export const goToLoginPage = async (page: Page) => {
    await page.goto('https://www.saucedemo.com');
};

export const navigateToDashboard = async (page: Page) => {
    await page.goto('https://www.saucedemo.com/dashboard');
};
