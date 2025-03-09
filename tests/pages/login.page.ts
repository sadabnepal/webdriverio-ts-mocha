import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get buttonSubmit() { return $("button[type='submit']") }

    async openLoginPage() {
        await super.open('https://the-internet.herokuapp.com/login');
    }

    async performLogin(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

}

export default new LoginPage();
