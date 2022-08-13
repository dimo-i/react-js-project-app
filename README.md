===========================

Progress Center project App. 

===========================

The project idea is a social media-like application where you can share your progress with your project, online. There is no limits what a project can be. It can be a art related, music related, car or home repairs and etc. 

There is a login/ register page. Home page and dashboard page. The home page gives the option to either login or register or enter the site without registration. Guest users wont be able to see the details page of the projects found on the dashboard. 
Logged/Registered users will see the navigation bar with a drop down menu with profile page and logout buttons. Clicking on "Home" you will be redirected to "Dashboard"page.

Logged/Registered users will be able to create their own projects and have access to the details page of every projects. If the logged user is the owner the project, the buttons "Edit/Delete" will be visible.  

The applications connects to the "SoftUni Practice Server", which was slightly edited. The collection and the users were slightly modified to meet the needs of the application.
  

client folder/main folder can be started with "npm start" where the server is with "node server". 

==================
Credentials for the pre-created users: 

peter@abv.bg
123456

john@abv.bg
123456

==================

The collection is pre-populated with several example projects where the owners are the given users. 

When new users are registered and new projects are created, the new projects will be added to the collection and the the details of the user can be seen on the "Profile details page"(showing only current logged user). However, when the server is restarted/turned off, all the newly created data will be lost as its not connected to a database. 

==================