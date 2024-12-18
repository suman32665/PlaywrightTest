import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/NavigationMenu/homePage';
import AboutJobinsPage from '../pages/NavigationMenu/aboutJobinsPage';
import MemberIntroductionPage from '../pages/NavigationMenu/memberIntroductionPage';
import WorkStylePage from '../pages/NavigationMenu/workStylePage';
import EntryPage from '../pages/NavigationMenu/entryPage';

test.describe('Header Section Tests', () => {
    test('Verify Header Navigation Menu', async ({ page }) => {
        const homePage = new HomePage(page); 
        await homePage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        await expect(homePage.homeLink).toBeVisible();
        await expect(new AboutJobinsPage(page).aboutJobinsLink).toBeVisible();
        await expect(new MemberIntroductionPage(page).memberIntroductionLink).toBeVisible();
        await expect(new WorkStylePage(page).workStyleLink).toBeVisible();
        await expect(new EntryPage(page).entryLink).toBeVisible();
    });

    test('Verify Header Navigation Menu Link', async ({ page }) => {       
        const homePage = new HomePage(page); 
        await homePage.navigateTo('https://jobins:g4vrh5vo5hqogd0dprfj@recruit.release.jobins.net/');

        await homePage.homeLink.click();
        await homePage.VerifyPageContent();
        await homePage.VerifyURL();

        const aboutJobinsPage = new AboutJobinsPage(page); 
        await aboutJobinsPage.aboutJobinsLink.click();
        await aboutJobinsPage.VerifyPageContent();
        await aboutJobinsPage.VerifyURL();

        const memberIntroductionPage = new MemberIntroductionPage(page); 
        await memberIntroductionPage.memberIntroductionLink.click();
        await memberIntroductionPage.VerifyPageContent();
        await memberIntroductionPage.VerifyURL();

        const workStylePage = new WorkStylePage(page); 
        await workStylePage.workStyleLink.click();
        await workStylePage.VerifyPageContent();
        await workStylePage.VerifyURL();

        const entryPage = new EntryPage(page); 
        await entryPage.entryLink.click();
        await entryPage.VerifyPageContent();
        await entryPage.VerifyURL();
    });
});
