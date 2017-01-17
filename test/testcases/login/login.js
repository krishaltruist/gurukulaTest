'use strict';


function Login(){}

Login.prototype.loginLinkText = function(){
    element(by.linkText("login")).click();
};

Login.prototype.loginAuthenticate = function(){
    element(by.buttonText('Authenticate')).click();
};

Login.prototype.enterUsernamePassword = function() {
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');
};

Login.prototype.loginAccountTab = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope','Account')).click().then(function(){
        element(by.cssContainingText('span.ng-scope', 'Authenticate')).click();
    });

};

Login.prototype.logoutFinal = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope','Account')).click().then(function(){
        element(by.cssContainingText('span.ng-scope', 'Log out')).click();
    });
};

Login.prototype.loginFromRegisterTab = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope','Account')).click().then(function(){
        element(by.cssContainingText('span.ng-scope', 'Register')).click();
    });
};

Login.prototype.loginRegisterLink = function(){
    element(by.linkText("Register a new account")).click();
};

Login.prototype.expectRememberUser = function() {
    expect(element(by.id('rememberMe')).getAttribute('class')).toEqual('ng-pristine ng-untouched ng-valid');
};

Login.prototype.redirectToHome = function () {
    element(by.cssContainingText('span.ng-scope', 'Home')).click();
};

Login.prototype.expectLogout = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope','Account')).click().then(function(){
        expect(element(by.cssContainingText('span.ng-scope', 'Log out')).isPresent()).toBe(true);
    });
};

Login.prototype.expectRemeberUnchecked = function () {
    element(by.id('rememberMe')).click();
    element(by.id('password')).click();
    expect(element(by.id('rememberMe')).getAttribute('class')).toEqual('ng-valid ng-dirty ng-valid-parse ng-touched');
};

Login.prototype.expectForgotPassword = function(){
    expect(element(by.cssContainingText('p.ng-scope', 'Enter the e-mail address you used to register')).isPresent()).toBe(true);
};

Login.prototype.expectResetPassword = function(){
    element(by.name('email')).sendKeys('admin@localhost');
    element(by.buttonText('Reset password')).click();
    expect(element(by.buttonText('Reset password')).isPresent()).toBe(true);
};

Login.prototype.forgotPasswordLink = function(){
    element(by.linkText("Did you forget your password?")).click();
};

Login.prototype.expectEmailLessCharacters = function(){
    element(by.name('email')).sendKeys('admi');
    expect(element(by.cssContainingText('p.help-block.ng-scope','Your e-mail is invalid.')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('p.help-block.ng-scope','Your e-mail is required to be at least 5 characters.')).isPresent()).toBe(true);
};

Login.prototype.expectEmailLongerCharacters = function () {
    element(by.name('email')).sendKeys('admikjhdkjhkhzhhfhfdhkjfhjdhfjdfhjkhkfhjdfhjkfhkjdhfzjkdfhkjzdfhzjkdfhzjkdfhkjzfhzkjhfkjzfhzkjfhkjdfdf');
    expect(element(by.cssContainingText('p.help-block.ng-scope','Your e-mail is invalid.')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('p.help-block.ng-scope','Your e-mail cannot be longer than 50 characters.')).isPresent()).toBe(true);
};

Login.prototype.expectWrongEmail = function () {
    element(by.name('email')).sendKeys('adminst');
    expect(element(by.cssContainingText('p.help-block.ng-scope','Your e-mail is invalid.')).isPresent()).toBe(true);
};

Login.prototype.registerNewUser = function () {
    element(by.linkText("Register a new account")).click();
    element(by.model('registerAccount.login')).sendKeys('krishna');
    element(by.model('registerAccount.email')).sendKeys('krishna@localhost');
    element(by.model('registerAccount.password')).sendKeys('krishna');
};

Login.prototype.expectConfirmPassword = function(){
    element(by.model('confirmPassword')).sendKeys('krishna');
    expect(element(by.buttonText('Register')).isPresent()).toBe(true);
};

Login.prototype.expectWrongConfirmPassword = function () {
    element(by.model('confirmPassword')).sendKeys('kris');
    expect(element(by.buttonText('Register')).isEnabled()).toBe(false);
    expect(element(by.cssContainingText('p.help-block.ng-scope.ng-hide', 'Your confirmation password is required.')).isPresent()).toBe(true);
};

Login.prototype.expectPasswordStrength = function(){
    element(by.model('confirmPassword')).sendKeys('krishna');
    expect(element(by.css('#strengthBar li:nth-child(1)')).getAttribute('style')).toEqual('background: rgb(255, 0, 0);');
    expect(element(by.buttonText('Register')).isPresent()).toBe(true);
};

module.exports = new Login();