/***********Gurukula Test Automation***************
**********Krishnarajan Rajendran*************
******************Conf File ****************/
var jasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    framework: 'jasmine2',
    seleniumPort: 4444,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['E:/gurukulaTest/test/testcases/specs/gurukula.spec.js'],
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 400000,
        allScriptsTimeout: 500000,
        print: function() {}
    },

    onPrepare: function () {


        jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                filePrefix: 'jasmine-report',
                savePath: 'protractor-result'
        }));


        browser.get("http://localhost:8080");
        browser.driver.manage().window().setSize(1280, 1024);


        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayFailuresSummary: true
            }
        }));
    }

};
/*This is the file which loads configuration for the test*/