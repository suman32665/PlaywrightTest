import { test, expect } from '@playwright/test';
import BasePage from './basePage';

class LandingPage extends BasePage {
    constructor(page) {
        super(page);
        this.heading1 = page.getByRole('heading', { name: 'Who we are ?' });
        this.heading2 = page.getByRole('heading', { name: 'Career Opening' });
        this.heading3 = page.getByRole('heading', { name: 'Our Team' });
        this.heading4 = page.getByRole('heading', { name: 'FAQs' });
        this.heading5 = page.getByRole('heading', { name: 'Company Overview' });
    }

    async VerifyHeadings() {
        await expect(this.heading1).toBeVisible();
        await expect(this.heading2).toBeVisible();
        await expect(this.heading3).toBeVisible();
        await expect(this.heading4).toBeVisible();
        await expect(this.heading5).toBeVisible();
    }
}

export default LandingPage;
