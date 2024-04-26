import { Page } from 'playwright';

export class AddToCart {
    static withProduct(productName: string) {
        return async (page: Page): Promise<void> => {
            // Example: Navigate to the product page if necessary
            // This part depends on your application's URL structure and navigation
            await page.goto(`https://www.saucedemo.com/inventory-item.html?id=${productName}`);

            // Click the add to cart button
            // The selector needs to be accurate according to your application's HTML structure
            await page.click(`button[data-test="add-to-cart-${productName}"]`);
        };
    }
}
