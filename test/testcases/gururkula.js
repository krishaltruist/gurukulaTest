'use strict';


var mainPage = require('../testcases/mainpage/mainpage');

function Gurukula() {}


Gurukula.prototype.getGurukula = function () {
    expect(browser.getTitle()).toEqual('gurukula');
};

Gurukula.prototype.navToHomePage = function(){
    mainPage.navToHome();
    expect(element(by.linkText('login')).isPresent()).toBeTruthy();
};

module.exports = new Gurukula();