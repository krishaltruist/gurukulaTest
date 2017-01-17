# gurukulaTest

## Test Automation

This is the Guide to build the automation suite for Gurukula.
Before starting the automation please install these Pre-requisites:
    Nodejs v5.4.1
    Protractor v4.0.12,
    Jasmine v2.5.2,
    Selenium-webdriver v10.2.10(Comes with protractor installation).

	Configure the Environment path variable with Protractor and jasmine path. So that command line usage will not be a problem.
	On running the suite if it asks for any packages just type this in your command prompt
	npm install -g <package name>
	Note: Make sure you are connected to internet.

### Test Case Folder Structure:

	* There are three main partition. Configuration, Test File and Supporting functions(Page file)
	* Automated Test2 : Change the permissions of the Create page in the Confluence Cloud.
	I have completed the exercise using #####Protractor+Jasmine##### framework. Since i am using this now i took this to write tet cases. As well as the Protractor is wrapper over the webdriver itself. 
	Please find the details of the files available.
		* My test configuration file is conf.js
		* Main test case file is testSpec.js
		* Page objects file is user.page.js
	I have used the User login and User logout operations as page objects .

	To run the test cases in the command prompt give "protractor conf.js"

	And importantly i have used sleep in the code. Since my network is bit slow the loadin of website is taking some time. 
	So manage that and perform the scripts i have added sleep.

	Kindly let me know if i need to add any other testing.

