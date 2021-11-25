import LoginPage from  '../pages/login.page';
import SecurePage from '../pages/secure.page';
import allureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        allureReporter.addFeature('Login Feature')
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toExist();
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});

