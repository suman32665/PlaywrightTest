import { test, expect } from '@playwright/test';
import BasePage from '../basePage';

class MemberIntroductionPage extends BasePage {
    constructor(page) {
        super(page);
        this.memberIntroductionLink =  page.getByRole('banner').getByRole('link', { name: 'メンバー紹介' });
        this.pageContent =  page.getByRole('heading', { name: 'Member' });
    }

    async VerifyPageContent() {
        await expect(this.pageContent).toBeVisible();
    }

    async VerifyURL() {
        expect(this.page).toHaveURL('https://recruit.release.jobins.net/team-member');
    }
}

export default MemberIntroductionPage;