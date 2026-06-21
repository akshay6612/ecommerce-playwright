import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Shopping Cart End-to-End Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should complete a successful purchase flow', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await inventory.addProductToCart('Sauce Labs Backpack');
    expect(await inventory.getCartCount()).toBe(1);

    await page.locator('.shopping_cart_link').click();
    expect(await cart.getItemCount()).toBe(1);
    await cart.proceedToCheckout();

    await checkout.fillShippingInfo('Rahul', 'Kumar', '440001');
    await checkout.completePurchase();

    const message = await checkout.getConfirmationText();
    expect(message).toContain('Thank you for your order');
  });
});
// Testing my new GitHub daily workflow!