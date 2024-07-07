import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';
import dashboardPage from '../pageobjects/dashboard.page.js';

Given(/^user is on Saucedemo Login Page$/, async () => {
	await loginPage.open();
});

Given('user input username with {string}', async (username) => {
	await loginPage.inputUsername(username)
});

Given('user input password with {string}', async (password) => {
	await loginPage.inputPassword(password);
});

When(/^user click login button$/, async () => {
	await loginPage.btnSubmit.click();
});

Then(/^user should redirect to the homepage$/, async () => {
	return await dashboardPage.validateOnPage();
});


Then(/^should see an error message$/, async () => {
	return await loginPage.validateAlertMessage();
});
