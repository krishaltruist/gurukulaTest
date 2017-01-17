'use strict';



var entitiesPage = require('../../entities/entities');
var loginPage = require('../../login/login');

exports.start = function(){
    describe('Entities Menu Options', function () {

        describe('Branch Functionality', function(){

            beforeEach(function(){
                loginPage.loginLinkText();
                loginPage.enterUsernamePassword();
                loginPage.loginAuthenticate();
            });

            afterEach(function(){
                loginPage.redirectToHome();
                loginPage.logoutFinal();
            });

            it('Check the Drop down contains Branch menu', function () {

                entitiesPage.expectBranchAvailable();
            });

            it('Branch Page elements', function () {

                entitiesPage.expectBranchPage();
            });

            it('Create Branch Form ', function () {

                entitiesPage.expectCreateBranch();
            });

            it('Check fields in Branch Form', function () {

                entitiesPage.expectFieldsBranchForm();
            });

            it('Filling the New branch form', function () {

               entitiesPage.expectFillingBrachForm();
               entitiesPage.deleteBranchRecord('Research');
            });

            it('To view created branch record', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.clickView();
                entitiesPage.expectBranchViewForm('Research','10');
                entitiesPage.clickBack();
                browser.sleep(1000);
                entitiesPage.deleteBranchRecord('Research');
            });

            it('To Edit created branch record', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.expectEditBranchForm();
                entitiesPage.clickView();
                entitiesPage.expectBranchViewForm('ResearchUpdated','50');
                entitiesPage.clickBack();
                browser.sleep(1000);
                entitiesPage.deleteBranchRecord('ResearchUpdated');
            });

        });

        describe('Staff Functionality', function(){

            beforeEach(function(){
                loginPage.loginLinkText();
                loginPage.enterUsernamePassword();
                loginPage.loginAuthenticate();
                });

            afterEach(function(){
                loginPage.redirectToHome();
                loginPage.logoutFinal();
            });

            it('Check the Drop Down contains Staff menu', function () {
                entitiesPage.expectStaffAvailable();

            });

            it('Staff Page elements', function () {
                entitiesPage.expectStaffPageElements();
            });

            it('Create Staff Form ', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.createStaffForm();
                entitiesPage.navigatetoBranch();
                entitiesPage.deleteBranchRecord('Research');
            });

            it('Check fields in Staff Form', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.expectCheckStaffForm();
                entitiesPage.navigatetoBranch();
                entitiesPage.deleteBranchRecord('Research');
            });

            it('Filling the New Staff form', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.expectFillingStaffForm();
                entitiesPage.deleteStaffRecord('NewStaffOne');
                entitiesPage.navigatetoBranch()
                entitiesPage.deleteBranchRecord('Research');
            });
            it('To view created staff record', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.expectFillingStaffForm();
                entitiesPage.clickView();
                entitiesPage.expectStaffViewForm('NewStaffOne','Research')
                entitiesPage.clickBack();
                browser.sleep(1000);
               entitiesPage.deleteStaffRecord('NewStaffOne');
               entitiesPage.navigatetoBranch();
               entitiesPage.deleteBranchRecord('Research');
            });

            it('To Edit created staff record', function () {
                entitiesPage.expectFillingBrachForm();
                entitiesPage.expectFillingStaffForm();
                entitiesPage.expectEditStaffForm();
                entitiesPage.clickView();
                entitiesPage.expectStaffViewForm('NewStafftwo','Research')
                entitiesPage.clickBack();
                entitiesPage.deleteStaffRecord('NewStaffOne');
                entitiesPage.navigatetoBranch();
                entitiesPage.deleteBranchRecord('Research');
            });

        });

    });

};