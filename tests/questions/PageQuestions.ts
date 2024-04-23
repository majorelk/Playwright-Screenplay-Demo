import { Page } from 'playwright';

export const canSeePageTitle = async (page: Page): Promise<string> => {
    return page.title();
};

export const canSeePageURL = async (page: Page): Promise<string> => {
    return page.url();
};

export const canSeePageSource = async (page: Page): Promise<string> => {
    return page.content();
};

export const canSeePageText = async (page: Page): Promise<string> => {
    return page.textContent('body');
};

export const canSeePageTitleContains = async (page: Page, text: string): Promise<boolean> => {
    return (await page.title()).includes(text);
}