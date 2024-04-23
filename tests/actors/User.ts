import { Page } from "playwright";

export class User {
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