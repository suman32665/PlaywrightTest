import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        // this.usernameField = '#username';
        // this.passwordField = '#password';
        // this.loginButton = 'button[type="submit"]';
    }

    // async login(username, password) {
        
    //     await this.page.fill(this.usernameField, username);
    //     await this.page.fill(this.passwordField, password);
    //     await this.page.click(this.loginButton);
    // }
}

export default LoginPage;
