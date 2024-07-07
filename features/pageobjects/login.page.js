import { $ } from '@wdio/globals';
import Page from './page.js';

class loginPage extends Page {
    open () {
        return super.open('');
    }
    get usernameTextBox () {
        return $('#user-name');
    }

    get passwordTextBox () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async inputUsername(username) {
        await (this.usernameTextBox).setValue(username);
    }

    async inputPassword(password) {
        await (this.passwordTextBox).setValue(password);
    }

    get alertMessage(){
        return $('[data-test="error"]')
    }

    async validateAlertMessage(){
        const alertText = (await this.alertMessage).getText();
        expect(alertText).toHaveText("Epic sadface: Username and password do not match any user in this service")
    }
}

export default new loginPage();
