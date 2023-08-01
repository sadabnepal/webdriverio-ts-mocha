import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $("button[type='submit']") }

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
