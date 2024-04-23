import { Page } from 'playwright';
import { fillLoginForm } from '@interactions/UserInteractions';

export class LoginTask {
    static loginWithCredentials(username: string = process.env.DEFAULT_USER || '', password: string = process.env.DEFAULT_PASSWORD || '') {
        return async (page: Page): Promise<void> => {
            // Check if either username or password are empty strings
            if (!username || !password) {
                throw new Error("Username or password not provided and not found in environment variables.");
            }

            await fillLoginForm(page, username, password);
        };
    }
}
