import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Hero Section Tests', () => {
    test('Visual regression testing for the hero section', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        await expect(page.getByText('100%')).toBeVisible();
        await expect(page.getByText('の挑戦。')).toBeVisible();

        page.getByText('そんな仲間を募集します。', { exact: true }).scrollIntoViewIfNeeded();
        await expect(page.getByText('そんな仲間を募集します。', { exact: true })).toBeVisible();
        await expect(page.getByText('私たちは、この０.１%への挑戦に”ワクワク”してしまう、', { exact: true })).toBeVisible();
        await expect(page.getByText('一緒にキセキの瞬間に立ち会いませんか？', { exact: true })).toBeVisible();
        await expect(page.getByText('創出することを目指し、０.１％のステージに挑み', { exact: true })).toBeVisible();
        await expect(page.getByText('アメリカ進出、上場、そして世界中の人に機会を', { exact: true })).toBeVisible();
        await expect(page.getByText('フルスピードで躍進し続ける。', { exact: true })).toBeVisible();
        await expect(page.getByText('この０.１％の存在となる為、可能性がある限り、', { exact: true })).toBeVisible();
        await expect(page.getByText('スタートアップ企業からユニコーン企業へと成長する確率。', { exact: true })).toBeVisible();
        await expect(page.getByText('JoBinsが考える０.１％とは・・・')).toBeVisible();
        await expect(page.getByText('我々には平等に機会があり、機会に挑戦する権利と自由がある。', { exact: true })).toBeVisible();
        await expect(page.getByText('いかなる不遇に生まれても、どんな逆境に立たされても、', { exact: true })).toBeVisible();
        await expect(page.getByText('世の中にはさまざまな奇跡が存在します。', { exact: true })).toBeVisible();
        await expect(page.getByText('野球観戦でホームランボールをゲットする確率・・・', { exact: true })).toBeVisible();
        await expect(page.getByText('高校球児がプロ野球選手になれる確率', { exact: true })).toBeVisible();
        await expect(page.getByText('宝くじで１等が当たる確率', { exact: true })).toBeVisible();
        await expect(page.getByText('あなたの考える０.１％とは何ですか？', { exact: true })).toBeVisible();
    });
});