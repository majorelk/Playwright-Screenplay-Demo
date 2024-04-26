import { test, expect } from '@playwright/test';
import { Actor } from '@actors/Actor';
import { Login } from '@tasks/Login';
import { Navigate } from '@tasks/Navigate';
import { AddToCart } from '@tasks/AddToCart';
import { Checkout } from '@tasks/Checkout';
import { VerifyOrderDetails } from '@questions/VerifyOrderDetails';
import { VerifyOrderConfirmation } from '@questions/VerifyOrderConfirmation';
import { users } from '@utils/Users';

test.describe('E-commerce Application - End-to-End Tests', () => {
  test('testCompleteShoppingExperience', async ({ page }) => {
    const standardUser = Actor.named('Standard User', page);

    await standardUser.perform(Navigate.toHomePage);
    await standardUser.perform(Login.withCredentials(users.standard.username, users.standard.password, page));
    await standardUser.perform(AddToCart.withProduct('sauce-labs-backpack'));
    await standardUser.perform(AddToCart.withProduct('sauce-labs-bike-light'));
    await standardUser.perform(Navigate.toCartPage);
    await standardUser.perform(Checkout.enterShippingDetails('John Doe', '123 Elm St', 'pobox123'));
    await standardUser.ask(VerifyOrderDetails());
    await standardUser.perform(Checkout.completePurchase());

    const confirmation = await standardUser.ask(VerifyOrderConfirmation());
    expect(confirmation).toContain('Thank you for your order');
  });
});
