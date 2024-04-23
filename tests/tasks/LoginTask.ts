import { Page } from 'playwright';
import { fillLoginForm } from '@interactions/UserInteractions';

export class LoginTask {
    static loginWithCredentials(username: string, password: string) {
        return async (page: Page): Promise<void> => {
            await fillLoginForm(page, username, password);
        };
    }
}
