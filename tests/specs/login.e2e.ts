import loginPage from '../pages/login.page'
import securePage from '../pages/secure.page'
import data from '../resources/logindata.json'
import loginConstants from '../static/loginConstants'

describe('login application', () => {
    beforeEach(async () => {
        await loginPage.openLoginPage()
    })

    it('TC_001:should login with valid credentials', async () => {
        await loginPage.performLogin(data.valid.user, data.valid.password)
        await expect(securePage.flashAlert).toExist()
        await expect(securePage.flashAlert).toHaveText(expect.stringContaining(loginConstants.LOGIN_SUCCESS_MSG))
    })

    it('TC_002:should not login with invalid credentials', async () => {
        await loginPage.performLogin(data.invalid.user, data.invalid.password)
        await expect(securePage.flashAlert).toHaveText(expect.stringContaining(loginConstants.LOGIN_FAILED_MSG))
    })
})
