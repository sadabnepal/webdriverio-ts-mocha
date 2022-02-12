import LoginConstants from '../static/loginConstants';
import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';

describe('Login application', () => {
    it('TC_001 : should login with valid credentials', async () => {
        await LoginPage.openLoginPage()
        await LoginPage.performLogin('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toExist();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('TC_002 : should not login with invalid credentials', async () => {
        await LoginPage.openLoginPage()
        await LoginPage.performLogin('foor', 'baar');
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
});