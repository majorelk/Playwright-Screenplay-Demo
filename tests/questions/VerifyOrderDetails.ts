import { Page } from 'playwright';

export const VerifyOrderDetails = () => async (page: Page): Promise<boolean> => {
    // Verify titles and other elements on the confirmation page
    const title = await page.textContent('.title');
    const paymentInfo = await page.textContent('div[data-test="payment-info-value"]');
    const shippingInfo = await page.textContent('div[data-test="shipping-info-value"]');
    const total = await page.textContent('div[data-test="total-label"]');
    const itemsListedCorrectly = await page.$$eval('.cart_item', items => {
        return items.every(item => {
            const name = item.querySelector('[data-test="inventory-item-name"]').textContent;
            const price = item.querySelector('[data-test="inventory-item-price"]').textContent;
            return name && price;
        });
    });

    // Return true if all checks pass
    return title.includes('Overview') && paymentInfo.includes('SauceCard') && shippingInfo.includes('Free Pony Express Delivery') && itemsListedCorrectly && total.includes('$43.18');
};
