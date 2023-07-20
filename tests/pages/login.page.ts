import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return this.getElement('#username') }
    get inputPassword() { return this.getElement('#password') }
    get btnSubmit() { return this.getElement("button[type='submit']") }

    async openLoginPage() {
        await super.open('https://the-internet.herokuapp.com/login');
    }

    async performLogin(username: string, password: string) {
        await this.setData(this.inputUsername, username);
        await this.setData(this.inputPassword, password);
        await this.clickElement(this.btnSubmit);
    }

}

export default new LoginPage();
