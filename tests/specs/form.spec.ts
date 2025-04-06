import formsPage from '../pages/forms.page';
import { formData } from '../resources/forms.data';

describe('form fields', () => {

    it('submit form', async () => {

        await formsPage.open();
        await formsPage.enterNames(formData.names);
        await formsPage.enterEmail(formData.email);
        await formsPage.selectCountryCode('977');
        await formsPage.enterPhoneNumber(formData.phoneNumber);
        await formsPage.enterAddress(formData.address);
        await formsPage.enterDateOfBirth(formData.dateOfBirth);
        await formsPage.selectGender(formData.gender);
        await formsPage.submitForm();
    });

});