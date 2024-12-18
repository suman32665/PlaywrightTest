import { test, expect } from '@playwright/test';
import BasePage from '../basePage';

class AboutJobinsPage extends BasePage {
    constructor(page) {
        super(page);
        this.aboutJobinsLink =  page.getByRole('banner').getByRole('link', { name: 'JoBinsについて' });
        this.pageContent =  page.getByRole('heading', { name: 'About Us' });
    }

    async VerifyPageContent() {
        await expect(this.pageContent).toBeVisible();
    }

    async VerifyURL() {
        expect(this.page).toHaveURL('https://recruit.release.jobins.net/about-us');
    }
}

export default AboutJobinsPage;