import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Who We Are? Section Tests', () => {
    test('Heading, Image and Link verification', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        page.getByRole('heading', { name: 'Who we are ?' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('heading', { name: 'Who we are ?' })).toBeVisible();
        await expect(page.locator('p').filter({ hasText: '私たちについて' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'who-we-are-' }).first()).toBeVisible();
        await expect(page.getByRole('img', { name: 'who-we-are-' }).nth(1)).toBeVisible();
        await expect(page.getByText('私たちは全国3,000')).toBeVisible();
        await expect(page.getByRole('link', { name: '私たちについて' })).toBeVisible();
        await expect(page.getByRole('link', { name: '私たちについて' })).toBeVisible();
    });
});
