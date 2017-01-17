'use strict';

var commonGeneric = require('../common/common-generic');
var mainPage = require('../mainpage/mainpage');
var gurukulaPage = require('../gururkula');

    describe('Gurukula', function () {
        var mainPageSpec = require('../mainpage/specs/mainpage.spec');
        var loginSpec = require('../login/specs/login.spec');
        var entitiesSpec = require('../entities/specs/entities.spec');
        var userAccountSpec = require('../useraccount/specs/useraccount.spec');

        describe('Landing page', function () {
            beforeEach(function () {
            gurukulaPage.getGurukula();
            gurukulaPage.navToHomePage();
        });

        afterEach(function () {
            mainPage.navToHome();
        });

        mainPageSpec.start();
        loginSpec.start();
        entitiesSpec.start();
        userAccountSpec.start();
    });
});
