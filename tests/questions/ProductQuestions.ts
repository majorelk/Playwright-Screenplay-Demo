import { Page } from 'playwright';

// Retrieves the src attributes of all images in the product catalog
export const getProductImages = async (page: Page, filterIds: string[] = []): Promise<string[]> => {
    return page.$$eval('.inventory_item_img', (imgs, filterIds) => {
        // Enhanced error handling and debugging
        console.log(`Filtering images with IDs: ${filterIds.join(', ')}`);
        return imgs.filter(img => {
            const productId = (img.closest('.inventory_item') as HTMLElement)?.dataset.productId;
            if (!productId) {
                console.error('Missing data-product-id on an inventory item.');
                return false;
            }
            return filterIds.length === 0 || filterIds.includes(productId);
        })
        .map(img => img.getAttribute('src'))
        .filter(src => {
            if (src === null) console.warn('Found an image without a src attribute.');
            return src !== null;
        }) as string[];
    }, filterIds);
};

// Retrieves details about products such as names and prices
export const getProductDetails = async (page: Page): Promise<{name: string, price: string}[]> => {
    return page.$$eval('.inventory_item', items => {
        return items.map(item => {
            const name = item.querySelector('.inventory_item_name')?.textContent || '';
            const price = item.querySelector('.inventory_item_price')?.textContent || '';
            if (!name || !price) {
                console.warn('Missing product name or price.');
            }
            return { name, price };
        });
    });
};
