import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import LandingPage from '../pages/landingPage';

test.describe('Login Tests', () => {
    test('Login and Verify Headings in Landing Page', async ({ page }) => {
        // Initialize Page Objects
        const loginPage = new LoginPage(page);
        const landingPage = new LandingPage(page);

        // Navigate to the login page
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        //Verify Headings
        await landingPage.VerifyHeadings();
    });
});
