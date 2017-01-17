'use strict';

var commonGeneric = require('../common/common-generic');

function MainPage() {
    this._homeTab = element(by.linkText('Home'));
    this._entitiesTab = element(by.linkText('Entities'));
    this._accountTab = element(by.linkText('Account'));

    this._loginAccountDropdown = element(by.linkText('Authenticate'));
    this._registerAccountDropdown = element(by.linkText('Register'));
    this._branchEntitiesDropdown = element(by.linkText('Branch'));
    this._staffEntitiesDropdown = element(by.linkText('Staff'));
    this._settingsAccountDropdown = element(by.linkText('Settings'));
    this._passwordAccountDropdown = element(by.linkText('Password'));
    this._sessionAccountDropdown = element(by.linkText('Sessions'));
    this._logoutAccountDropdown = element(by.linkText('Logout'));

    this._loginLink = element(by.linkText('login'));
    this._registerLink = element(by.linkText('Register a new account'));
}

MainPage.prototype = {
    getHomeTab: function () {
        return this._homeTab;
    },
    getEntitiesTab: function () {
        return this._entitiesTab;
    },
    getAccountTab: function () {
        return this._accountTab;
    },
    getLoginMenu: function () {
        return this._loginAccountDropdown;
    },
    getRegisterMenu: function () {
        return this._registerAccountDropdown;
    },
    getBranchMenu: function () {
        return this._branchEntitiesDropdown;
    },
    getStaffMenu: function () {
        return this._staffEntitiesDropdown;
    },
    getSettingsMenu: function () {
        return this._settingsAccountDropdown;
    },
    getPasswordMenu: function () {
        return this._passwordAccountDropdown;
    },
    getSessionMenu: function () {
        return this._sessionAccountDropdown;
    },
    getLogoutMenu: function () {
        return this._logoutAccountDropdown;
    },
    navToHome: function () {
        commonGeneric.clickElement(this._homeTab);
    },
    navToAccount: function () {
        commonGeneric.clickElement(this._accountTab);
    },
    navToEntities: function () {
        commonGeneric.clickElement(this._entitiesTab);
    },
    navToBranch: function () {
        this.navToEntities();
        commonGeneric.clickElement(this._branchEntitiesDropdown);
    },
    navToStaff: function () {
        this.navToEntities();
        commonGeneric.clickElement(this._staffEntitiesDropdown);
    },
    navToLogin: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._loginAccountDropdown);
    },
    navToRegister: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._registerAccountDropdown);
    },

    navToSettings: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._settingsAccountDropdown);
    },

    navToPassword: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._passwordAccountDropdown);
    },
    navToSession: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._sessionAccountDropdown);
    },
    navToLogout: function () {
        this.navToAccount();
        commonGeneric.clickElement(this._logoutAccountDropdown);
    },
    navToLoginLink: function () {
        commonGeneric.clickElement(this._loginLink);
    },
    navtoRegisterLink: function () {
        commonGeneric.clickElement(this._registerLink);
    }
};

module.exports = new MainPage();
