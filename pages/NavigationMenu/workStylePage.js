import { test, expect } from '@playwright/test';
import BasePage from '../basePage';

class WorkStylePage extends BasePage {
    constructor(page) {
        super(page);
        this.workStyleLink =  page.getByRole('banner').getByRole('link', { name: '働き方' });
        this.pageContent =  page.getByRole('heading', { name: 'Our Working Environment' });
    }

    async VerifyPageContent() {
        await expect(this.pageContent).toBeVisible();
    }

    async VerifyURL() {
        expect(this.page).toHaveURL('https://recruit.release.jobins.net/working');
    }
}

export default WorkStylePage;