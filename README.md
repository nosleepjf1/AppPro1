#Applicantpro Accounting App

##Summary
-This application, in it's current state, allows an admin to create more admins/users. Non-admins can create a new user account.
Once an account is made the user can sign in and will arrive either at /admin.php or /user.php depending on their user type. Admins
can create new dynamic forms. These forms will be visible for users. Users can submit these forms. Admins can view submissions for each
form.

##Current Known Bugs
-After clicking "Create New Form" in /admin.php, if you exit the modal without entering all the data, an empty form is still created.
-When viewing submissions in the responses tab, any checklist inputs will only show one check even if multiple checks are saved in the database.
-When viewing submissions in the responses tab, the number of submissions will say "1 of 1" when there are no submissions.
-When viewing submissions in the responses tab, the CSV Export button does not work correctly yet because it is only half built.

##Features not yet built
-A CSV export is in progress that will export all submissions for the current form.
-The admin should be able to approve/reject submissions and leave notes.
-The user should see notifications in the toolwheel that allow them to see feedback from the admin and resubmit the form.
-Whenever an admin leaves feedback and email notification should be sent to the user.
-Whenever an user submits a form an email notification should be sent to the admin.
