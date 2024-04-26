import { Page } from "playwright";
import * as dotenv from "dotenv";

dotenv.config();  // Ensure environment variables are loaded

// Class for an actor that can perform tasks


export class Actor {
    private name: string;
    page: Page;

    constructor(name: string, page: Page) {
        this.page = page;
        this.name = name;
    }

    // Method for actor to attempt to perform multiple tasks
    async attemptsTo(...tasks: ((page: Page) => Promise<void>)[]) {
        for (const task of tasks) {
            await task(this.page);
        }
    }

    async perform(task: (page: Page) => Promise<void>) {
        await task(this.page);
    }

    async ask(question: (page: Page) => Promise<any>) {
        return await question(this.page);
    }

    // Static method to create a named actor
    static named(name: string, page: Page) {
        return new Actor(name, page);
    }
}
