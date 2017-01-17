'use strict';

var entitiesPage = require('../entities/entities');

function Entities(){}

Entities.prototype.expectCheckStaffForm = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Staff')).click().then(function(){
            element(by.buttonText('Create a new Staff')).click().then(function(){
                expect(element(by.id('myStaffLabel')).isPresent()).toBe(true);
                expect(element(by.model('staff.id')).isPresent()).toBe(true);
                expect(element(by.model('staff.name')).isPresent()).toBe(true);
                expect(element(by.model('staff.related_branchId')).isPresent()).toBe(true);
                browser.sleep(1000);
                element(by.xpath("*//div[@id='saveStaffModal']//span[text()='Cancel']")).click();
                browser.sleep(1000);
            });
        });
    });
};


Entities.prototype.expectFillingStaffForm = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Staff')).click().then(function(){
            browser.sleep(1000);
            element(by.buttonText('Create a new Staff')).click().then(function(){
                browser.sleep(1000);
                expect(element(by.id('myStaffLabel')).isPresent()).toBe(true);
                expect(element(by.model('staff.id')).isPresent()).toBe(true);
                element(by.model('staff.name')).sendKeys('NewStaffOne');
                element(by.model('staff.related_branchId')).click().then(function(){
                    browser.sleep(1000);
                    element(by.cssContainingText('option','Research')).click();
                    browser.sleep(1000);
                });
                element(by.cssContainingText('span.ng-scope','Save')).click().then(function(){
                    browser.sleep(1000);
                    expect(element(by.cssContainingText('td.ng-binding','NewStaffOne')).isPresent()).toBe(true);
                });
            });
        });
    });
};

Entities.prototype.expectFieldsBranchForm = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Branch')).click().then(function(){
            element(by.buttonText('Create a new Branch')).click().then(function(){
                expect(element(by.id('myBranchLabel')).isPresent()).toBe(true);
                expect(element(by.model('branch.id')).isPresent()).toBe(true);
                expect(element(by.model('branch.name')).isPresent()).toBe(true);
                expect(element(by.model('branch.code')).isPresent()).toBe(true);
                browser.sleep(1000);
                element(by.xpath("*//div[@id='saveBranchModal']//span[text()='Cancel']")).click();
                browser.sleep(1000);
            });
        });
    });
};

Entities.prototype.expectFillingBrachForm = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Branch')).click().then(function(){
            element(by.buttonText('Create a new Branch')).click().then(function(){
                expect(element(by.id('myBranchLabel')).isPresent()).toBe(true);
                expect(element(by.model('branch.id')).isPresent()).toBe(true);
                browser.sleep(1000);
                element(by.model('branch.name')).sendKeys('Research');
                browser.sleep(1000);
                element(by.model('branch.code')).sendKeys('10');
                browser.sleep(1000);
                element(by.cssContainingText('span.ng-scope','Save')).click().then(function(){
                    browser.sleep(2000);
                    expect(element(by.cssContainingText('td.ng-binding','Research')).isPresent()).toBe(true);
                });
            });
        });
    });
};

Entities.prototype.createStaffForm = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Staff')).click().then(function(){
            element(by.buttonText('Create a new Staff')).click().then(function(){
                expect(element(by.id('myStaffLabel')).isPresent()).toBe(true);
                browser.sleep(1000);
                element(by.xpath("*//div[@id='saveStaffModal']//span[text()='Cancel']")).click();
                browser.sleep(1000);
            });
        });
    });
};


Entities.prototype.expectStaffPageElements = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Staff')).click().then(function(){
            expect(element(by.id('searchQuery')).isPresent()).toBe(true);
            expect(element(by.cssContainingText('button.btn.btn-primary','Create a new Staff')).isPresent()).toBe(true);
            expect(element(by.cssContainingText('button.btn.btn-info','Search a Staff')).isPresent()).toBe(true);
        });
    });
};

Entities.prototype.expectStaffAvailable = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        expect(element(by.cssContainingText('span.ng-scope', 'Staff')).isPresent()).toBe(true);
    });
};

Entities.prototype.expectCreateBranch = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Branch')).click().then(function(){
            element(by.buttonText('Create a new Branch')).click().then(function(){
                expect(element(by.id('myBranchLabel')).isPresent()).toBe(true);
                browser.sleep(1000);
                element(by.xpath("*//div[@id='saveBranchModal']//span[text()='Cancel']")).click();
                browser.sleep(1000);
            });
        });
    });
};

Entities.prototype.expectBranchAvailable = function () {
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        expect(element(by.cssContainingText('span.ng-scope', 'Branch')).isPresent()).toBe(true);
    });
};

Entities.prototype.expectBranchPage = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Branch')).click().then(function(){
            expect(element(by.id('searchQuery')).isPresent()).toBe(true);
            expect(element(by.cssContainingText('button.btn.btn-primary','Create a new Branch')).isPresent()).toBe(true);
            expect(element(by.cssContainingText('button.btn.btn-info','Search a Branch')).isPresent()).toBe(true);
        });
    });
};

Entities.prototype.deleteStaffRecord = function(staffName){
    element(by.xpath("//div[contains(@class, 'table-responsive')]//span[text()='Delete']")).click().then(function () {
        browser.sleep(1000);
        element(by.xpath("*//div[@id='deleteStaffConfirmation']//span[text()='Delete']")).click();
        browser.sleep(1000);
        expect(element(by.cssContainingText('td.ng-binding',staffName )).isPresent()).toBe(false);

    });
};

Entities.prototype.deleteBranchRecord = function (branchName) {
    element(by.xpath("//div[contains(@class, 'table-responsive')]//span[text()='Delete']")).click().then(function () {
        browser.sleep(1000);
        element(by.xpath("*//div[@id='deleteBranchConfirmation']//span[text()='Delete']")).click();
        browser.sleep(1000);
        expect(element(by.cssContainingText('td.ng-binding', branchName)).isPresent()).toBe(false);

    });
};

Entities.prototype.navigatetoBranch = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Branch')).click();

    });
};



Entities.prototype.navigatetoStaff = function(){
    element(by.cssContainingText('span.hidden-tablet.ng-scope', 'Entities')).click().then(function () {
        element(by.cssContainingText('span.ng-scope', 'Staff')).click();

    });
};

Entities.prototype.clickView = function () {
    element(by.cssContainingText('span.ng-scope', 'View')).click();
};

Entities.prototype.clickBack =function () {
    element(by.cssContainingText('span.ng-scope', 'Back')).click();
};

Entities.prototype.expectEditStaffForm = function () {
    element(by.cssContainingText('span.ng-scope', 'Edit')).click();
    expect(element(by.model('staff.name')).getAttribute('value')).toEqual('NewStaffOne');
    browser.sleep(1000);
    element(by.model('staff.name')).clear().then(function(){
        element(by.model('staff.name')).sendKeys('NewStafftwo');
    });
    browser.sleep(1000);
    element(by.cssContainingText('span.ng-scope','Save')).click();
    browser.sleep(1000);

};
Entities.prototype.expectEditBranchForm= function () {
    element(by.cssContainingText('span.ng-scope', 'Edit')).click();
    expect(element(by.model('branch.name')).getAttribute('value')).toEqual('Research');
    expect(element(by.model('branch.code')).getAttribute('value')).toEqual('10');
    browser.sleep(1000);
    element(by.model('branch.name')).clear().then(function(){
        element(by.model('branch.name')).sendKeys('ResearchUpdated');
    });
    element(by.model('branch.code')).clear().then(function(){
        element(by.model('branch.code')).sendKeys('50');
    });
    browser.sleep(1000);
    element(by.cssContainingText('span.ng-scope','Save')).click();
    browser.sleep(1000);

};
Entities.prototype.expectStaffViewForm = function (staffname,branch) {
    expect(element(by.xpath("*//span[contains(@translate, 'gurukulaApp.staff.related_branch')]/parent::td/following-sibling::td/input")).getAttribute('value')).toEqual(branch)
    expect(element(by.xpath("*//span[contains(@translate, 'gurukulaApp.staff.name')]/parent::td/following-sibling::td/input")).getAttribute('value')).toEqual(staffname)

};

Entities.prototype.expectBranchViewForm = function (branch,code) {
    expect(element(by.xpath("*//span[contains(@translate, 'gurukulaApp.branch.code')]/parent::td/following-sibling::td/input")).getAttribute('value')).toEqual(code)
    expect(element(by.xpath("*//span[contains(@translate, 'gurukulaApp.branch.name')]/parent::td/following-sibling::td/input")).getAttribute('value')).toEqual(branch)

};
module.exports = new Entities();