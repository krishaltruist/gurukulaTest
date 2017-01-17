'use strict';

var mainPage = require('../../mainpage/mainpage');
var testData = require('../data/main.json');

exports.start = function () {

    describe('Main Page', function () {

        it('Landing page of Gurukula and traverse to other pages', function () {
            expect(browser.getTitle()).toEqual('gurukula');

        });
    });
};
