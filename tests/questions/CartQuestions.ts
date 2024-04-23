// questions/CartContents.ts
import { Page } from 'playwright';

export const getCartContents = async (page: Page): Promise<string[]> => {
    const items = await page.$$eval('.cart_item', items => items.map(item => item.textContent));
    const filteredItems = items.filter(item => item !== null) as string[];
    return filteredItems;
};
