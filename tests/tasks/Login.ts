import { Page } from 'playwright';
import { fillLoginForm } from '@interactions/UserInteractions';

export class Login {
    static withCredentials(username: string, password: string, page: Page) {
        return async (page: Page): Promise<void> => {
            await fillLoginForm(username, password, page);
        };
    }
}