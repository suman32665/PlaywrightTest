import { test, expect } from '@playwright/test';
import BasePage from '../basePage';

class EntryPage extends BasePage {
    constructor(page) {
        super(page);
        this.entryLink =  page.getByRole('banner').getByRole('link', { name: 'エントリー' });
        this.pageContent =  page.getByRole('heading', { name: 'Recruit', exact: true })
    }

    async VerifyPageContent() {
        await expect(this.pageContent).toBeVisible();
    }

    async VerifyURL() {
        expect(this.page).toHaveURL('https://recruit.release.jobins.net/career');
    }
}

export default EntryPage;