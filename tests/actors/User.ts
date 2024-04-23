import { Page } from "playwright";
import * as dotenv from "dotenv";

dotenv.config();

export class User {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginAs() {
    await this.page.goto("https://example.com/login");
    await this.page.fill('input[name="email"]', process.env.EMAIL);
    await this.page.fill('input[name="password"]', process.env.PASSWORD);
    await this.page.click('button[type="submit"]');
  }
}
 
 Now, we can use the  User  class in our test file. 
 // Path: tests/login.test.ts