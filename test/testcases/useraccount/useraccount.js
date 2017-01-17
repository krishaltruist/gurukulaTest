'use strict';


function UserAccount(){}

UserAccount.prototype.expectAccountOptions = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Account')).click().then(function () {

        expect(element(by.cssContainingText('span.ng-scope', 'Settings')).isPresent()).toBe(true);
        expect(element(by.cssContainingText('span.ng-scope', 'Password')).isPresent()).toBe(true);
        expect(element(by.cssContainingText('span.ng-scope', 'Sessions')).isPresent()).toBe(true);
        expect(element(by.cssContainingText('span.ng-scope', 'Log out')).isPresent()).toBe(true);


    });
};

UserAccount.prototype.settingPageFunctions = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Account')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Settings')).click();
        element(by.model('settingsAccount.firstName')).clear().then(function(){
            element(by.model('settingsAccount.firstName')).sendKeys('AdministratorNew');
        });
        element(by.model('settingsAccount.lastName')).clear().then(function(){
            element(by.model('settingsAccount.lastName')).sendKeys('AdministratorNew');
        });
        element(by.model('settingsAccount.email')).clear().then(function(){
            element(by.model('settingsAccount.email')).sendKeys('adminNew@localhost');
        });
        element(by.xpath("//form//button[text()='Save']")).click();
        expect(element(by.xpath("//div/strong[text()='Settings saved!']")).isPresent()).toBe(true);
    });
};

UserAccount.prototype.expectPasswordPage = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Account')).click().then(function () {
        browser.sleep(1000);
        element(by.cssContainingText('span.ng-scope', 'Password')).click();
        element(by.model('password')).clear().then(function(){
            element(by.model('password')).sendKeys('admin1');
        });
        element(by.model('confirmPassword')).clear().then(function(){
            element(by.model('confirmPassword')).sendKeys('admin1');
        });
        element(by.xpath("//form//button[text()='Save']")).click();
        expect(element(by.xpath("//div/strong[text()= 'Password changed!']")).isPresent()).toBe(true);
    });
};

UserAccount.prototype.expectSessionPage = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Account')).click().then(function () {
        browser.sleep(1000);
        element(by.cssContainingText('span.ng-scope', 'Sessions')).click();
        expect(element(by.cssContainingText('button.btn','Invalidate')).isPresent()).toBe(true);
        element(by.cssContainingText('button.btn','Invalidate')).click();
        browser.sleep(1000);
        expect(element(by.cssContainingText('strong','Session invalidated!')).isPresent()).toBe(true);

    });
};

UserAccount.prototype.expectLogout = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope','Account')).click().then(function(){
        expect(element(by.cssContainingText('span.ng-scope', 'Log out')).isPresent()).toBe(true);
    });
};

module.exports = new UserAccount();