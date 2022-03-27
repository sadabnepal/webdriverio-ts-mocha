import LoginPage from '@UIPages/login.page';
import SecurePage from '@UIPages/secure.page';
import LoginConstants from '@UIStatic/loginConstants';

describe('Login application', () => {

    beforeEach(async () => {
        await LoginPage.openLoginPage()
    })

    it('TC_001 : should login with valid credentials', async () => {
        await LoginPage.performLogin('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toExist();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('TC_002 : should not login with invalid credentials', async () => {
        await LoginPage.performLogin('foor', 'baar');
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
});