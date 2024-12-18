import { test, expect } from '@playwright/test';
import BasePage from '../basePage';

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.homeLink =  page.getByRole('banner').getByRole('link', { name: 'ホーム' });
        this.pageContent = page.getByText('の挑戦。');
    }

    async VerifyPageContent() {
        await expect(this.pageContent).toBeVisible();
    }

    async VerifyURL() {
        expect(this.page).toHaveURL('https://recruit.release.jobins.net/');
    }
}

export default HomePage;