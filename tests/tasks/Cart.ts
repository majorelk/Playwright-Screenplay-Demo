import { Page } from 'playwright';
import { Navigate } from '@tasks/Navigate';

export class AddToCart {
    static withProduct(productId: string) {
        return async (page: Page): Promise<void> => {
            await page.click(`#add-to-cart-${productId}`);
        };
    }
}

export class RemoveFromCart {
    static withProduct(productId: string) {
        return async (page: Page): Promise<void> => {
            await page.click(`#remove-from-cart-${productId}`);
        };
    }
}

export class ViewCart {
    static contents() {
        return async (page: Page): Promise<void> => {
            await page.click('#view-cart');
        };
    }
}

export class Checkout {
    static cart() {
        return async (page: Page): Promise<void> => {
            await page.click('#checkout');
        };
    }
}

export class ContinueShopping {
    static fromCart() {
        return async (page: Page): Promise<void> => {
            await page.click('#continue-shopping');
        };
    }
} 

export class CheckProductDetails {
    static async viewFirstProductDetails(page: Page) {
        await Navigate.toProductPage(page);
    }
}
