'use strict';
//element that are clickable
exports.clickElement = function (elem) {
  browser.waitForAngular();
  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 5000, 'Element not clickable');
  elem.click();
  browser.waitForAngular();
};
