import loginPage from '../pages/login.page';
import securePage from '../pages/secure.page';
import data from '../resources/logindata.json';

describe('login fail', () => {

    beforeEach(async () => {
        await loginPage.openLoginPage();
    });

    it.skip('should fail test intentionally', async () => {
        await loginPage.performLogin(data.valid.user, data.valid.password);
        await expect(securePage.flashAlert).not.toExist();
    });
});
