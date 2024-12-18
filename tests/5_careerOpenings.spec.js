import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Career Openings Section Tests', () => {
    test('Job Filtering functionality and Job listing links verification', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        page.getByRole('heading', { name: 'Career Opening' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('heading', { name: 'Career Opening' })).toBeVisible();
        await expect(page.getByText('募集中の求人')).toBeVisible();
        
        await page.getByRole('tab', { name: '新卒採用' }).click();
        await page.getByRole('link', { name: 'job posting New Graduate' }).click();
        await expect(page.getByRole('heading', { name: '仕事内容' })).toBeVisible();

        await page.goBack();
        await page.getByRole('tab', { name: 'キャリア採用' }).click();
        await page.getByRole('link', { name: 'job posting システムエンジニア 正社員 応募する' }).click();
        await expect(page.getByRole('heading', { name: '仕事内容' })).toBeVisible();
        
        await page.goBack();
        await page.getByRole('link', { name: 'job posting Career' }).click();
        await expect(page.getByRole('heading', { name: '仕事内容' })).toBeVisible();
        
        await page.goBack();
        await page.getByRole('tab', { name: '長期インターン採用' }).click();
        await page.getByRole('link', { name: 'job posting Long-term intern' }).click();
        await expect(page.getByRole('heading', { name: '仕事内容' })).toBeVisible();
        
        await page.goBack();
        await page.locator('div').filter({ hasText: /^キャリア採用新卒採用長期インターン採用すべて見る$/ }).getByRole('link').click();
        await expect(page.getByRole('heading', { name: 'Recruit', exact: true })).toBeVisible();
        await expect(page.getByText('ー採用情報')).toBeVisible();
    });
});
