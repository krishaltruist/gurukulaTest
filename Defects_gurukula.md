#Defects Found in Gurukula

The below are the defects found in the Gurukula Application.

###Register new user not working
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* In the drop down click Register.
* Create new user with the appropriate details which is different from the existing user details.
* Click the Register button.
####Expected Result:
* The Register button should get Enabled now.
* The User should get registered successfully.
####Actual Result:
* The Register button should get Enabled now.
* Error thrown for registering the new user.

###Settings cannot be changed
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Account again and then click settings from drop down.
* Try Changing any value in the settings page.
####Expected Result:
* After Clicking the Save the settings should get updated successfully.
####Actual Result:
* On clicking Save it throws error as settings cannot be saved.

###Invalidating the session in not loggin out the gurukula
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Account Again and click on the Sessions.
* Click on the latest or all the session to invalidate.
####Expected Result
* On clicking the Invalidate the session should throw us to Main page and should get logged out.
####Actual Result
* Actually the session still alive and no logging out of User happens. Also the request going in same session.

###Branch pagination is not happening
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Entities in the Navigation bar. 
* Open Branch page by clicking Branch from dropdown.
* Create 25 branch entries
####Expected Result
* Pagination should get enabled with icons for it.
* 10 Entries should get displayed in first page and others in the next pages.
####Actual Result
* No pagination created, the entries added in same page. 

###Validation for the Duplicate names in the branch is not available.
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Entities in the Navigation bar. 
* Open Branch page by clicking Branch from dropdown.
* Try adding branch entries in same name and same code.
####Expected Result
* Should throw error on creating with same name and code
####Actual Result
* No error or warning thrown. Redundant data got created.

###Validation for the Duplicate name in the staff is not available
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Entities in the Navigation bar. 
* Open Staff page by clicking Staff from dropdown.
* Try adding Staff entries in same name and same branch.
####Expected Result
* Should throw error on creating with same name and branch
####Actual Result
* No error or warning thrown. Redundant data got created.


###Password is not getting changed
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click the Account again and then Password
* Try changing the password
####Expected Result
* Password should get changed successfully
####Actual Result
* Changing of password is not allowed

###Text entering is not clearing the previous existing text
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Account again and then click settings from drop down.
* Try Changing any value in the settings page.
####Expected Results
* On clicking the new text field the Existing values should get cleared automatically.
####Actual Results
* While clicking the text field the previous values are not got cleared automatically.

###Query is not working, it brings all the values suddenly from logs.
####Steps to Reproduce:
* Click the Account on Navigation Bar.
* Click Authenticate and login with the admin credentials.
* Click Entities in the Navigation bar. 
* Open Branch page by clicking Branch from dropdown.
* Try adding branch entries in same name and same code.
* After Adding several entries and several deletes.
* Query the Any branch code deleted or available
####Expected Result
* Should show the matching entries that are available
####Actual Result
* Displaying all the entries even the deleted ones.