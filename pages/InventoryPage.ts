import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart(productName: string) {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName });
    await product.locator('button').click();
  }

  async getCartCount(): Promise<number> {
    const text = await this.cartBadge.textContent();
    return parseInt(text ?? '0');
  }
}