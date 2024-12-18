import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Company Overview Section Tests', () => {
    test('Visual inspection for layout and multimedia performance', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        page.getByRole('heading', { name: 'Company Overview' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('heading', { name: 'Company Overview' })).toBeVisible();
        await expect(page.getByText('会社概要')).toBeVisible();

        await expect(page.locator('iframe').contentFrame().getByText('株式会社JoBins')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('会社説明資料')).toBeVisible();

        await page.locator('iframe').contentFrame().getByLabel('Next page').hover();
        await page.locator('iframe').contentFrame().getByLabel('Next page').click();
        await expect(page.locator('iframe').contentFrame().getByText('会社概要').nth(1)).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('VMVについて')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('事業について')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('これまでの沿革')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('組織/人について')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('制度について')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('採用について')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('よくある質問')).toBeVisible();
        
        await page.locator('iframe').contentFrame().getByLabel('Next page').click();
        await expect(page.locator('iframe').contentFrame().getByText('会社概要').nth(2)).toBeVisible();
        await page.locator('iframe').contentFrame().getByLabel('Next page').click();
        await expect(page.locator('iframe').contentFrame().getByText('株式会社JoBins(ジョビンズ)')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('徳永 勇治').nth(1)).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('億9,860千円（資本剰余金を含む）')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('年8月')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('人材紹介エージェントプラットフォームの運営')).toBeVisible();
        await expect(page.locator('iframe').contentFrame().getByText('大阪市⻄区北堀江1-19-8 四ツ橋KMビル3F')).toBeVisible();
    });
});