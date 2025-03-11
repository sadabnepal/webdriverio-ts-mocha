import { faker } from '@faker-js/faker';
import formsPage from '../pages/forms.page';

describe('form fields', () => {

    it('submit form', async () => {
        const names = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName()
        };

        const address = {
            addressLine1: faker.location.streetAddress(),
            addressLine2: faker.location.secondaryAddress(),
            state: faker.location.state(),
            postalCode: faker.location.zipCode(),
            country: faker.location.country()
        };

        await formsPage.open();
        await formsPage.enterNames(names);
        await formsPage.enterEmail(faker.internet.email());
        await formsPage.selectCountryCode('977');
        await formsPage.enterPhoneNumber(faker.phone.number({ style: 'international' }));
        await formsPage.enterAddress(address);
        await formsPage.enterDateOfBirth(faker.date.birthdate({ refDate: '1993-01-01' }).toString());
        await formsPage.selectGender('male');
        await formsPage.submitForm();
    });

});