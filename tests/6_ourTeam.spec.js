import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('Our Team Section Tests', () => {
    test('Verify team member card structure and hover effects', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        page.getByRole('heading', { name: 'Our Team' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
        await expect(page.getByRole('main').getByText('メンバー紹介')).toBeVisible();
        
        await expect(page.getByRole('link', { name: 'Sajan Lamsal サズン ラムサル Sajan' })).toBeVisible();
        page.getByRole('link', { name: 'Sajan Lamsal サズン ラムサル Sajan' }).hover();
        await expect(page.getByRole('main')).toContainText('一からのプロダクト創りに挑む新たなス テージ');

        await expect(page.getByRole('link', { name: 'Chiho Enomoto 榎元 千穂 Chiho' })).toBeVisible();
        page.getByRole('link', { name: 'Chiho Enomoto 榎元 千穂 Chiho' }).hover();
        await expect(page.getByRole('main')).toContainText('やりがいと働き方を模索した結果たどり着いた、JoBinsの「カスタマーサクセス」という仕事');

        await expect(page.getByRole('link', { name: 'Hayato Yamaguchi 山口 勇人 Hayato' })).toBeVisible();
        page.getByRole('link', { name: 'Hayato Yamaguchi 山口 勇人 Hayato' }).hover();
        await expect(page.getByRole('main')).toContainText('「何をやっているのか」ではなく、 「何を学べるのか');

        page.getByRole('link', { name: 'Yoshinobu Nagaoka 長岡 功展' }).scrollIntoViewIfNeeded();
        await expect(page.getByRole('link', { name: 'Yoshinobu Nagaoka 長岡 功展' })).toBeVisible();
        page.getByRole('link', { name: 'Yoshinobu Nagaoka 長岡 功展' }).hover();
        await expect(page.getByRole('main')).toContainText('自らの力で世の中に革新を起こす');

        await expect(page.getByRole('link', { name: 'Yuka Matsumura 松村 有香 Yuka' })).toBeVisible();
        page.getByRole('link', { name: 'Yuka Matsumura 松村 有香 Yuka' }).hover();
        await expect(page.getByRole('main')).toContainText('自分の人生の選択肢を無限大に');

    });
});