import Page from './page';
import { WaitEnum } from '../enums/WaitEnums';

class LoginPage extends Page {
 
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('https://the-internet.herokuapp.com/login');
    }

    login (username: string, password: string) {
        this.setData(this.inputUsername, username, WaitEnum.NONE);
        this.setData(this.inputPassword, password, WaitEnum.NONE);
        this.click(this.btnSubmit, WaitEnum.NONE); 
    }

}

export default new LoginPage();
