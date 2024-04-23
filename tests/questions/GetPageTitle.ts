import { Page } from 'playwright';

export const getPageTitle = async (page: Page): Promise<string> => {
    return page.title();
};
