import { Page } from 'playwright';

export const Navigate = {
    toLoginPage: async (page: Page) => {
        await page.goto('https://www.saucedemo.com');
    },
    toHomePage: async (page: Page) => {
        await page.goto('https://www.saucedemo.com');
    },
    toProductPage: async (page: Page) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
    },
    toCartPage: async (page: Page) => {
        await page.goto('https://www.saucedemo.com/cart.html');
    },
    back: async (page: Page) => {
        await page.goBack();
    },
    forward: async (page: Page) => {
        await page.goForward();
    }
};