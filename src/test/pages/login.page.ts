import { clickElement, setData } from 'test/utils/commands';
import Page from './page';

class LoginPage extends Page {
 
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $("button[type='submit']") }

    open () {
        return super.open('https://the-internet.herokuapp.com/login');
    }

    login (username: string, password: string) {
        setData(this.inputUsername, username);
        setData(this.inputPassword, password);
        clickElement(this.btnSubmit); 
    }

}

export default new LoginPage();
