import { Page } from 'playwright';
import { goToProductPage } from '../interactions/Navigate';

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
        await goToProductPage(page);
    }
}

 /*
 The CartTasks file contains classes that represent tasks that can be performed on the cart. The tasks are: 
 
 AddToCart : Adds a product to the cart. 
 RemoveFromCart : Removes a product from the cart. 
 ViewCart : Navigates to the cart page. 
 Checkout : Initiates the checkout process. 
 ContinueShopping : Navigates back to the store from the cart page.
 CheckProductDetails : Navigates to the product page to view product details.
 
 The tasks are implemented as static methods that return a function that accepts a Playwright  Page  object and returns a  Promise<void> . The function performs the task on the provided page. 
 The  AddToCart  and  RemoveFromCart  tasks take a product ID as an argument. The product ID is used to locate the product on the page and interact with it. 
 The  ViewCart ,  Checkout , and  ContinueShopping  tasks do not take any arguments. They interact with elements on the page based on their IDs. 
 The tasks are designed to be used with the  Actor  class to perform actions on the cart. 
 Step 4: Create a Scenario 
 Create a new file named  AddToCartScenario.ts  in the  tests/scenarios  directory and add the following code: 
 // Path: tests/scenarios/AddToCartScenario.ts

 */