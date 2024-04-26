import { Page } from 'playwright';

export class Checkout {
    static enterShippingDetails(firstName: string, lastName: string, zipCode: string) {
        return async (page: Page): Promise<void> => {
            // Fill in shipping details
            await page.fill('input[data-test="firstName"]', firstName);
            await page.fill('input[data-test="lastName"]', lastName);
            await page.fill('input[data-test="postalCode"]', zipCode);

            // Click continue and handle possible validation errors
            await page.click('button[data-test="continue"]');
            const firstNameError = await page.textContent('div[data-test="firstName-error"]');
            const lastNameError = await page.textContent('div[data-test="lastName-error"]');
            const postalCodeError = await page.textContent('div[data-test="postalCode-error"]');

            if (firstNameError || lastNameError || postalCodeError) {
                throw new Error(`Checkout Error: ${firstNameError || ''} ${lastNameError || ''} ${postalCodeError || ''}`);
            }
        };
    }

    static completePurchase() {
        return async (page: Page): Promise<void> => {
            await page.click('button[data-test="finish"]');
        };
    }
}
