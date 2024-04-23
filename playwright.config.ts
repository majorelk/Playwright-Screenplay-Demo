import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: false, // Set to true for CI environments
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        actionTimeout: 5000,
    },
    projects: [
        {
            name: 'Desktop Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    testDir: './tests/scenarios',
    timeout: 30000,
};

export default config;