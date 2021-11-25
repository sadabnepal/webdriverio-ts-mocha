import LoginConstants from '../static/loginConstants';
import LoginPage from  '../pages/login.page';
import SecurePage from '../pages/secure.page';

describe('TC_001 : Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toExist();
        expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('should login with invalid credentials', () => {
        LoginPage.open();
        LoginPage.login('foor', 'baar');
        expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
});