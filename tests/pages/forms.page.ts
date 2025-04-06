import { IAddress, IGender, INames } from '../types/forms';

class FormsPage {

    async open() {
        await browser.maximizeWindow();
        return await browser.url('https://letcode.in/forms');
    }

    async enterNames(options: INames) {
        const { firstName, lastName } = options;
        await $('#firstname').setValue(firstName);
        await $('#lasttname').setValue(lastName);
    }

    async enterEmail(email: string) {
        await $('#email').setValue(email);
    }

    async selectCountryCode(code: string) {
        await $("//*[@id='countrycode']/following-sibling::*//select").selectByAttribute('value', code);
    }

    async enterPhoneNumber(phone: string) {
        await $('#Phno').setValue(phone);
    }

    async enterAddress(options: IAddress) {
        const { addressLine1, addressLine2, state, postalCode, country } = options;
        await $('#Addl1').setValue(addressLine1);
        await $('#Addl2').setValue(addressLine2);
        await $('#state').setValue(state);
        await $('#postalcode').setValue(postalCode);
        await $("//*[@id='country']/following-sibling::*//select").selectByVisibleText(country);
    }

    async enterDateOfBirth(date: string) {
        await $('#Date').setValue(date);
    }

    async selectGender(gender: IGender) {
        await $(`//input[@name='gender' and @id='${gender}']`).click();
    }

    async submitForm() {
        await $('[type=checkbox]').click();
        await $('[type=submit]').click();
    }
}
export default new FormsPage();