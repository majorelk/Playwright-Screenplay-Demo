import { test, expect } from '@playwright/test';
import { Actor } from '../actors/Actor';
import { Navigate } from '../tasks/Navigate';
import { AddToCart, RemoveFromCart } from '@tasks/Cart';
import { getCartContents } from '@questions/CartQuestions';

test.describe('Cart Operations Tests', () => {
    test('User can add and remove items from the cart in the catalogue', async ({ page }) => {
        const actor = Actor.named('Standard User', page);
        await actor.perform(Navigate.toProductPage);

        // Add items to the cart
        await actor.perform(AddToCart.for('Sauce Labs Backpack'));
        await actor.perform(AddToCart.for('Sauce Labs Bike Light'));

        const removeButton = page.locator('#remove-sauce-labs-backpack');
        await removeButton.waitFor();

        // Verify items are added
        let cartContents = await actor.ask(getCartContents); // Update the function call to pass the 'page' parameter
        expect(cartContents).toContain('Sauce Labs Backpack');
        expect(cartContents).toContain('Sauce Labs Bike Light');

        // Remove an item and verify
        await actor.perform(RemoveFromCart.for('Sauce Labs Bike Light'));
        cartContents = await actor.ask(getCartContents); // Update the function call to pass the 'page' parameter
        expect(cartContents).not.toContain('Sauce Labs Bike Light');
    });

    test('User can add and remove items from the cart', async ({ page }) => {
        const actor = Actor.named('Shopper', page);
        await actor.perform(Navigate.toProductPage);

        // Add items to the cart
        await actor.perform(AddToCart.for('Sauce Labs Backpack'));
        await actor.perform(AddToCart.for('Sauce Labs Bike Light'));

        // Verify items are added
        let cartContents = await actor.ask(getCartContents);
        expect(cartContents).toContain('Sauce Labs Backpack');
        expect(cartContents).toContain('Sauce Labs Bike Light');

        // Remove an item and verify
        await actor.perform(RemoveFromCart.for('Sauce Labs Bike Light'));
        cartContents = await actor.ask(canSeeExpectedItemsInCart());
        expect(cartContents).not.toContain('Sauce Labs Bike Light');
    });
});