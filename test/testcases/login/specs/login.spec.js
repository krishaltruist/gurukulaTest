'use strict';

exports.start = function(){

    var loginPage = require('../../login/login');

    describe('Login Page', function () {

        afterEach(function(){
            loginPage.redirectToHome();
            loginPage.logoutFinal();
        });

        it('Login using the link in home page', function () {
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
            loginPage.expectLogout();
        });

        it('Login from the Account Menu', function () {
            loginPage.loginAccountTab();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
            loginPage.expectLogout();
        });

        it('Login from register page', function(){
            loginPage.loginFromRegisterTab();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
            loginPage.expectLogout();
        });

        it('Login from register page after register link from home page', function(){
            loginPage.loginRegisterLink();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
            loginPage.expectLogout();
        });

        it('Automatic Login box checked', function(){
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.expectRememberUser();
            loginPage.loginAuthenticate();
        });

        it('Automatic Login box unchecked', function(){
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.expectRemeberUnchecked();
            loginPage.loginAuthenticate();
        });

        it('Forgot Password Link page ', function(){
            loginPage.loginLinkText();
            loginPage.forgotPasswordLink();
            loginPage.expectForgotPassword();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Enter email and click reset password ', function(){
            loginPage.loginLinkText();
            loginPage.forgotPasswordLink();
            loginPage.expectResetPassword();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Email with less characters ', function(){
            loginPage.loginLinkText();
            loginPage.forgotPasswordLink();
            loginPage.expectEmailLessCharacters();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Email with more characters ', function(){
            loginPage.loginLinkText();
            loginPage.forgotPasswordLink();
            loginPage.expectEmailLongerCharacters();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Enter email and click reset password ', function(){
            loginPage.loginLinkText();
            loginPage.forgotPasswordLink();
            loginPage.expectWrongEmail();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Register new user', function(){
            loginPage.registerNewUser();
            loginPage.expectConfirmPassword();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Register new user error on confirm password', function(){
            loginPage.registerNewUser();
            loginPage.expectWrongConfirmPassword();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

        it('Register new user password strength', function(){
            loginPage.registerNewUser();
            loginPage.expectPasswordStrength();
            loginPage.redirectToHome();
            loginPage.loginLinkText();
            loginPage.enterUsernamePassword();
            loginPage.loginAuthenticate();
        });

    });

};
