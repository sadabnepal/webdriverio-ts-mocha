import Page from './page';

class LoginPage extends Page {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $("button[type='submit']") }

    openLoginPage() {
        super.open('https://the-internet.herokuapp.com/login');
        return this;
    }

    performLogin(username: string, password: string) {
        this.setData(this.inputUsername, username);
        this.setData(this.inputPassword, password);
        this.clickElement(this.btnSubmit);
    }

}

export default new LoginPage();
