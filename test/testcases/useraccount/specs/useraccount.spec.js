'use strict';

var userAccountPage = require('../../useraccount/useraccount');
var loginPage = require('../../login/login');

exports.start = function(){

  describe('Account Menu from Nav bar', function(){

    beforeEach(function(){
        loginPage.loginLinkText();
        loginPage.enterUsernamePassword();
        loginPage.loginAuthenticate();
    });

    afterEach(function(){
        loginPage.redirectToHome();
        loginPage.logoutFinal();
    });


    it('Checking the Account has all the options', function () {
        userAccountPage.expectAccountOptions();
    });

    it('Checking the Setting Page', function () {
        userAccountPage.settingPageFunctions();
    });

    it('Checking the Password Page', function () {
        userAccountPage.expectPasswordPage();
    });

    it('Checking the Sessions Page', function () {
       userAccountPage.expectSessionPage();
    });

    it('Checking the Logout', function () {
        userAccountPage.expectLogout();
    });


  });


};