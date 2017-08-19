# DestinyChild_Collections

## Angular Todo App
 
### Overview
### What is this app for?
 
This is a Todo app. It helps users to keep track of any things that they have todo.
 
### What does it do?
 
This app will allow users to register and login. Once the users have done that, they'll be able to create items to add to their todo list. Once they've created their todo list, they'll be able to update the status of each item and even delete items!
 
### How does it work
 
This app uses JSON Web Tokens to authenticate users and keep them logged in. All the data is consumed from an API hosted on Heroku using AngularJS. The site is styled with Bootstrap.
Now we’ve defined three headings inside our Overview section. These headings are:

What is the app for?
What does it do?
How does it work?
And then inside of each of those headings, we just have a simple paragraph describing each header.


Screenshot from 2016-10-24 15-19-48.png


Next we’ll tackle our feature list:

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
## Features
 
### Existing Features
- None yet!
 
### Features Left to Implement
- User Based Features
    - Registration
    - Login
    - Logout
- Todo Based Features
    - Creating Todo Items
    - Retrieving Todo Items
    - Updating Todo Items
    - Deleting Todo Items
Here we have two headings inside our Features section:

Existing Features
Features Left to Implement
Under the Existing Features heading, we just have a small list containing a single item that says “None yet!” because we haven’t built any features yet!

And then in Features Left to Implement, we have a list containing two items: User Based Features and Todo based Features. Each of these lists contain sublists containing the features that need to be built for each of those types of features.

User Based Features include things like login and registration and Todo Based Features will include things like retrieving and updating todo items.

Now let’s talk some more about the tech that we’ll be using in the project. Under the Tech Used heading, add the following:

1
2
3
4
5
6
7
8
9
### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
Here we have a single header that simply says Some of the tech used includes. And then we just have a list of tech that we’re using and each item in the list is accompanied by a description of how we’re using it.

When using a link in Markdown, we use the square brackets to define the text that will be displayed; and in the parenthesis we put the actual link, like a href attribute in an anchor element.

We use the double asterisks to make our text bold.


Screenshot from 2016-10-24 17-22-48.png


Lastly, we’ll tackle the Contributing section. This is where we’ll inform other developers of how they can get their hands on the code and get it running on their own machines. It will detail the instructions that a developer will need to follow in order to set up the project, so that they can develop their version of the code or even make contributions to your original code.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
## Contributing
 
### Getting the code up and running
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
OK, so now we have our seven steps that a developer will need to follow in order to contribute to the repo! Anything contained within the opening and closing ``` shows up as code. This is like using HTML’s <code> element.

At the moment, we only use this to inform others of the commands they need to run – however, Markdown does also allow for you to specify a language so it can highlight the syntax accordingly. For example:

1
2
3
4
5
6
7
```javascript 
function greet(target) {
    console.log("Hello, " + target + "!");
}
 
greet("World");
```
This will give us the following:

markdown


We don’t need this kind of fanciness at the moment, but it’s a really useful way of highlighting certain areas of your code, or giving examples of how to use some of the code that you’ve built!

Notice that we’re using a numbered list! Once again, this is similar to HTML’s <ol> and once we tab in and start number items inside an existing numbered list, it will automatically create a list ordered by roman numerals.

The last new thing that we have in there is the single asterisks (*). These simply denote that the text inside should be italicized.


Screenshot from 2016-10-26 07-32-10.png

 
Now that we have our README.md file done, we can go ahead and push it up to Github. In order to do that, we just use our usual Git commands:

1
2
3
git add README.md
git commit -m “Add README”
git push
And there we have it!


Screenshot from 2016-10-26 11-07-53.png

 
As a bit of practice, try to keep your README file up-to-date as you make your way through this module!


SUMMARY

So in this lesson we’ve managed to create ourselves a nice README.md file that will give other developers (or anyone that visits this repository) an overview of what purpose this project solves, what it does (or will eventually do!), the tech involved in making it work, and how other developers can get access to the code and how they can make modifications and even contribute to the existing project.

We managed to achieve this by creating a simple Markdown file and using some basic formatting syntax! This tiny amount of syntax allowed us to create headers of different sizes, bold and italic text, create lists (both ordered and unordered) with sublists, create links, and stylized code areas.

 COMPLETED CODE
The code for this lesson can be found at https://github.com/Code-Institute-Org/full_stack_solutions/tree/master/Stream-1/angular-todo/markdown


 ADDITIONAL PERSPECTIVES FROM PEOPLE WE LIKE

Markdown Cheatsheet
PREVIOUS UNITNEXT UNIT
 
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
OK, so now we have our seven steps that a developer will need to follow in order to contribute to the repo! Anything contained within the opening and closing ``` shows up as code. This is like using HTML’s <code> element.

At the moment, we only use this to inform others of the commands they need to run – however, Markdown does also allow for you to specify a language so it can highlight the syntax accordingly. For example:

1
2
3
4
5
6
7
```javascript 
function greet(target) {
    console.log("Hello, " + target + "!");
}
 
greet("World");
```
This will give us the following:

markdown


We don’t need this kind of fanciness at the moment, but it’s a really useful way of highlighting certain areas of your code, or giving examples of how to use some of the code that you’ve built!

Notice that we’re using a numbered list! Once again, this is similar to HTML’s <ol> and once we tab in and start number items inside an existing numbered list, it will automatically create a list ordered by roman numerals.

The last new thing that we have in there is the single asterisks (*). These simply denote that the text inside should be italicized.


Screenshot from 2016-10-26 07-32-10.png

 
Now that we have our README.md file done, we can go ahead and push it up to Github. In order to do that, we just use our usual Git commands:

1
2
3
git add README.md
git commit -m “Add README”
git push
And there we have it!


Screenshot from 2016-10-26 11-07-53.png

 
As a bit of practice, try to keep your README file up-to-date as you make your way through this module!


SUMMARY

So in this lesson we’ve managed to create ourselves a nice README.md file that will give other developers (or anyone that visits this repository) an overview of what purpose this project solves, what it does (or will eventually do!), the tech involved in making it work, and how other developers can get access to the code and how they can make modifications and even contribute to the existing project.

We managed to achieve this by creating a simple Markdown file and using some basic formatting syntax! This tiny amount of syntax allowed us to create headers of different sizes, bold and italic text, create lists (both ordered and unordered) with sublists, create links, and stylized code areas.

 COMPLETED CODE
The code for this lesson can be found at https://github.com/Code-Institute-Org/full_stack_solutions/tree/master/Stream-1/angular-todo/markdown


 ADDITIONAL PERSPECTIVES FROM PEOPLE WE LIKE

Markdown Cheatsheet
PREVIOUS UNITNEXT UNIT