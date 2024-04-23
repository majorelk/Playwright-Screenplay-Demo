import { Page } from "playwright";
import * as dotenv from "dotenv";

dotenv.config();

export class User {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginAs(userType: string) {
    const usernameMap: { [key: string]: string } = {
        standard_user: 'standard_user',
        locked_out_user: 'locked_out_user',
        problem_user: 'problem_user',
        performance_glitch_user: 'performance_glitch_user',
        error_user: 'error_user',
        visual_user: 'visual_user',
    };

    const username = usernameMap[userType];
    const password = process.env.PASSWORD; // This uses the USER_PASSWORD environment variable set in the .env file

    if (!password) {
        throw new Error("USER_PASSWORD not found in environment variables"); 
    }


    await this.page.goto("https://www.saucedemo.com");
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
