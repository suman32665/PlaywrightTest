import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Footer Section Tests', () => {
    test('Link Validation for social media icons', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        const wantedly = page.locator('.max-w-\\[70rem\\] > div:nth-child(2) > a').first();
        const fb = page.locator('.max-w-\\[70rem\\] > div:nth-child(2) > a:nth-child(2)');

        await wantedly.scrollIntoViewIfNeeded();
        const wantedlyLink = await wantedly.getAttribute('href');
        const fbLink = await fb.getAttribute('href');

        expect(wantedlyLink).toBe('https://www.wantedly.com/companies/jobins?ref=jobins.jp');
        expect(fbLink).toBe('https://www.facebook.com/jobins.jp?ref=jobins.jp');
    });

    test('Footer content validation', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        page.getByRole('contentinfo').getByRole('link', { name: 'ホーム' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('contentinfo').getByRole('link', { name: 'ホーム' })).toBeVisible();
        await expect(page.getByRole('contentinfo').getByRole('link', { name: 'JoBinsについて' })).toBeVisible();
        await expect(page.getByRole('contentinfo').getByRole('link', { name: 'メンバー紹介' })).toBeVisible();
        await expect(page.getByRole('contentinfo').getByRole('link', { name: 'エントリー' })).toBeVisible();
        await expect(page.getByRole('contentinfo').getByRole('link', { name: '働き方' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'プライバシーポリシー' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'footer logo' }).nth(1)).toBeVisible();
        await expect(page.getByRole('link', { name: 'footer logo' }).nth(2)).toBeVisible();
        await expect(page.getByRole('link', { name: 'footer logo' }).first()).toBeVisible();
        await expect(page.getByText('© 2024 JoBins Co. Ltd.')).toBeVisible();

    });
});