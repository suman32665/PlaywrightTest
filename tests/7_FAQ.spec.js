import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test.describe('FAQ Section Tests', () => {
    test('Test expand/collapse behavior and Validate FAQ content structure', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        await expect(page.getByRole('heading', { name: 'FAQs' })).toBeVisible();
        await expect(page.getByText('よくある質問')).toBeVisible();

        await page.getByRole('button', { name: 'オンラインでの面接は可能ですか？' }).click();
        await expect(page.getByText('面接・面談は基本的に対面での実施をお願いしております。')).toBeVisible();
        
        await page.getByRole('button', { name: '面接当日の準備物と服装について教えてください。' }).click();
        await expect(page.getByText('事前準備物に関しては中途/新卒/職種別に異なりますので、 ご応募いただいた後別途ご案内させていただきます。 また、服装はスーツを着用する必要はありませんので、カ')).toBeVisible();
        
        await page.getByRole('button', { name: '人事評価制度について教えてください。' }).click();
        await expect(page.getByText('・ミッション（階級に応じた業務の達成度） ・能力（弊社独自の人事制度ガイドブックに基づく、階級に応じたスキルの到達度） の2')).toBeVisible();
        
        await page.getByRole('button', { name: '会社の雰囲気はどんな感じですか？' }).click();
        await expect(page.getByText('「協働と称賛」という言葉を大事にしており、 活気があり、チームワークを重視した風通しの良い雰囲気があります。 会議の開始前なども「キックオフ」と称して自身の近況')).toBeVisible();


    });
});