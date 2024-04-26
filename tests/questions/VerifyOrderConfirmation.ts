import { Page } from 'playwright';

export const VerifyOrderConfirmation = () => async (page: Page): Promise<string> => {
    // Wait for the confirmation message to ensure it has loaded
    await page.waitForSelector('h2[data-test="complete-header"]');

    // Retrieve and return the confirmation message text
    const confirmationText = await page.textContent('h2[data-test="complete-header"]');
    return confirmationText || '';
};
