import { Page } from "playwright";
import * as dotenv from "dotenv";

dotenv.config();  // Ensure environment variables are loaded

export class Actor {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async perform(task: (page: Page) => Promise<void>) {
        await task(this.page);
    }

    async ask(question: (page: Page) => Promise<any>) {
        return await question(this.page);
    }
}
