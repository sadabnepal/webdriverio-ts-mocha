import { faker } from '@faker-js/faker';
import { IFormData } from '../types/forms';

export const formData: IFormData = {
    names: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    },
    gender: 'male',
    email: faker.internet.email(),
    phoneNumber: faker.phone.number({ style: 'international' }),
    dateOfBirth: faker.date.birthdate({ refDate: '1993-01-01' }).toString(),
    address: {
        addressLine1: faker.location.streetAddress(),
        addressLine2: faker.location.secondaryAddress(),
        state: faker.location.state(),
        postalCode: faker.location.zipCode(),
        country: faker.location.country()
    }
};
