import { Page } from 'playwright';

export class Checkout {
    static begin() {
        return async (page: Page): Promise<void> => {
            await page.click('button[data-test="checkout"]');
        };
    }

    static enterShippingDetails(firstName: string, lastName: string, zipCode: string) {
        return async (page: Page): Promise<void> => {
            await page.fill('input[data-test="firstName"]', firstName);
            await page.fill('input[data-test="lastName"]', lastName);
            await page.fill('input[data-test="postalCode"]', zipCode);
            await page.click('button[data-test="continue"]');
        };
    }

    static completePurchase() {
        return async (page: Page): Promise<void> => {
            await page.click('button[data-test="finish"]');
        };
    }
}
