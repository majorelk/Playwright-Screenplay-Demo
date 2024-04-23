import { test, expect } from '@playwright/test';
import { User } from '../actors/User';
import { Login } from '../tasks/Login';
import { getPageTitle } from '../questions/GetPageTitle';

test.describe('Login Functionality Tests', () => {
    test('Standard user can log in successfully', async ({ page }) => {
        const user = new User(page);
        await user.perform(Login.withCredentials('standard_user', 'secret_sauce'));
        const title = await user.ask(getPageTitle);
        expect(title).toBe('Swag Labs');
    });
});
