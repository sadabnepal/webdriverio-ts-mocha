import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';
import data from "../resources/logindata.json";
import LoginConstants from '../static/loginConstants';

describe('Login application', () => {

    beforeEach(async () => {
        await LoginPage.openLoginPage()
    })

    it('TC_001:should login with valid credentials', async () => {
        await LoginPage.performLogin(data.valid.user, data.valid.password);
        await expect(SecurePage.flashAlert).toExist();
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_SUCCESS_MSG);
    });

    it('TC_002:should not login with invalid credentials', async () => {
        await LoginPage.performLogin(data.invalid.user, data.invalid.password);
        await expect(SecurePage.flashAlert).toHaveTextContaining(LoginConstants.LOGIN_FAILED_MSG);
    });
});