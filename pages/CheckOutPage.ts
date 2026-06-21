import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) { this.page = page; }

  async fillShippingInfo(firstName: string, lastName: string, zip: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async completePurchase() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async getConfirmationText(): Promise<string> {
    return await this.page.locator('.complete-header').textContent() ?? '';
  }
}