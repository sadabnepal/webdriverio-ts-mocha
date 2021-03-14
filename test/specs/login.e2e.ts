import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import allureReporter from '@wdio/allure-reporter'

import {expect} from 'chai';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        allureReporter.addFeature('Login Feature')
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert.isExisting()).to.be.true;
        expect(SecurePage.flashAlert.getText()).contains('You logged into a secure area!');
    });
});

