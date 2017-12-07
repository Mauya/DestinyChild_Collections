# DestinyChild_Collections

## Final Code Institute Stream1 Project 

### Project Title: SKStream1-SwingCrew Band Web App


#### Overview

The project is built using angularjs and Bootstrap features. This app is a working prototype SwingCrew band web App (swing/jive) that provides services to the communities in Ireland.Thus, the project features Angularjs framework including controllers and viewers together, properties and functions, directives and services in a simple to follow manner to show case the activities of the band. The main web application languages used for stream1 include HTML, CSS, Jquery, Javascript and Bootstrap.

### Prerequisites 
Firstly sign in [GitHub](http://github.com) if you haven't already and create the project repository. Secondly, download [Nodejs](https://nodejs.org/en/download). For this project you need to install [Nodejs](https://nodejs.org/en/download) which include latest version of npm. Using npm Install: install libraries and dependencies (Package.json) install Bower.json and using bower install, install Angularjs framework, bootstrap and also this allows you to add any dependencies such as audioplayer, fontowesome etc. For more information on how to start check official website for AngularJS.


### Tech Used
1. NPM -npm is the basis for managing some of the dependencies in our application
2. Angularjs- Angular for page routing, creating custom services and directives. Other Angularjs for touch-animate and audioplayer.
3. Bootstrap - Bootstrap to provide responsive layout and simplify styling
4. Bower - Bower for installing and managing libraries and frameworks such as bootstrap, Jquery and Angularjs 
5. sublime - Text editor used for this project but you are free to chooseany editor.
6. Http-server - This is installed to allow localhost to run the project and update saved changes.
7. github - used for this project as the version control platform

### Getting the code up and running

To use this code please clone/fork or download this repository or use commandline by running the git clone [SKstream1](https://github.com/Mauya/SKstream1)  

Once npm and bower are installed, you need to install the required dependencies in package.json and bower.json (open sublime/other text editor to check these files). Use git to install (in windows):

* npm install

* bower install

After installing the dependencies, also ensure http-server is installed and runnung. The project then run on localhost - 8080

### Deploying the Project

* The project is deployed via the github pages (gh-pages).

### Testing

Testing is on-going but Angularjs is complex for any beginner and this becomes all important. Also the use of dependency injection makes it easy to test application code. The javaScript code in the project is checked using JSHint. Also console testing is on-going.

### Contributing

* Sandra kadungure

### Acknowledgement
* Ali Ashik (Mentor)
* Yoni Lavi (Mentor )
* Tiffany Snell
* Ian Rufus (on audio directives and services)
* SyLwester Piorkowski (fellow student)

## Angular Todo App
 
### Overview
### What is this app for?
 
This is a Todo app. It helps users to keep track of any things that they have todo.
 
### What does it do?
 
This app will allow users to register and login. Once the users have done that, they'll be able to create items to add to their todo list. Once they've created their todo list, they'll be able to update the status of each item and even delete items!
 
### How does it work
 
This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap.
Now we’ve defined three headings inside our Overview section. These headings are:

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks

### Features
 
### Tech Used
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
### Contributing
#### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request