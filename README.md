# backbone-headstart
Backbone - Headstart

References: Developing Backbone.js Applications
By Addy Osmani (@addyosmani)

See https://addyosmani.com/backbone-fundamentals/

Uses: https://github.com/jeromegn/Backbone.localStorage

#Chapter 01 Prelude
Introduces Backbone.

To run the code, do the following:
- Inside the DBACh01 project directory run: npm install
- Run: bower install
- Run: grunt bower
- Run: grunt process-html
- Run: grunt 
- Run: npm start
- Open a web browser at: http://localhost:4711 (You should be greeted with 'Hello World!')

#Chapter 2 - Fundamentals
Traces the history of the MVC design pattern and introduces how it is implemented by Backbone.js and other JavaScript frameworks.

#Chapter 3 - Backbone Basics
Covers the major features of the Backbone.js core and the technologies and techniques you will need to know in order to apply it.

#Chapter 4 - Exercise 1: Todos - Your First Backbone.js App
Takes you step-by-step through development of a simple client-side Todo List application.

To run the code, do the following:
- Inside the DBACh04 project directory run: npm install
- Run: bower install
- Run: grunt bower
- Run: grunt process-html
- Run: grunt 
- Run: npm start
- Open a web browser at: http://localhost:4711/todo.html

#Chapter 5 - Exercise 2: Book Library - Your First RESTful Backbone.js App
Walks you through development of a Book Library application which persists its model to a server using a REST API.

To run the code, do the following:
- Inside the DBACh05 project directory run: npm install
- Run: bower install
- Run: grunt distribute
- Run: npm start
- Open a web browser at: http://localhost:4712/library.html

To install and run MongoDB, follow the instructions:
https://docs.mongodb.com/manual/installation/

Sample of C:\\Users\\user\\MongoDB\\mongodb.config file (in YAML), using spaces instead of tabs (!):

storage:
  dbPath:"C:\\Users\\user\\MongoDB\\data"

Note: On Windows, one needs to use \\ instead of \.

Add the path to mongod.exe (inside C:\\Program Files\\MongoDB\\Server\\3.2\\bin) to Windows Environment Variable Path.

Then start MongoDB as:

mongod --config C:\\Users\\user\\MongoDB\\mongodb.config

Download and install the MongoDB GUI 'MongoChef' from http://3t.io/mongochef

Learn MongoChef: 
https://www.youtube.com/channel/UCLYMAj4tAAh5iVDNHXpDm3Q

#Chapter 6 - Backbone Extensions
Describes Backbone.Marionette and Thorax, two extension frameworks which add features to Backbone.js that are useful for developing large-scale applications.

Revisits the Todo Application of Chapter 4, using Marionette's Regions.

To run the code, do the following:
- Inside the DBACh06 project directory run: npm install
- Run: bower install
- Run: grunt distribute
- Run: npm start
- Open a web browser at: http://localhost:4712/library.html

#Chapter 7 - Common Problems and Solutions
Reviews common issues you may encounter when using Backbone.js and ways of addressing them.

#Chapter 8 - Modular Development
Looks at how AMD modules and RequireJS can be used to modularize your code.

#Chapter 9 - Exercise 3: Todos - Your First Modular Backbone + RequireJS App
Takes you through rewriting the app created in Exercise 1 to be more modular with the help of RequireJS.

#Chapter 10 - Paginating Backbone Requests & Collections
Walks through how to use the Backbone.Paginator plugin to paginate data for your Collections.

#Chapter 11 - Backbone Boilerplate And Grunt BBB
Introduces powerful tools you can use to bootstrap a new Backbone.js application with boilerplate code.

#Chapter 12 - Mobile Applications
Addresses the issues that arise when using Backbone with jQuery Mobile.

#Chapter 13 - Jasmine
Covers how to unit test Backbone code using the Jasmine test framework.

#Chapter 14 - QUnit
Discusses how to use QUnit for unit testing.

#Chapter 15 - SinonJS
Discusses how to use SinonJS for unit testing your Backbone apps.

#Chapter 16 - Resources
Provides references to additional Backbone-related resources.

#Chapter 17 - Conclusions
Wraps up our tour through the world of Backbone.js development.

#Chapter 18 - Appendix
Returns to our design pattern discussion by contrasting MVC with the Model-View-Presenter (MVP) pattern and examines how Backbone.js relates to both. A walkthrough of writing a Backbone-like library from scratch and other topics are also covered.

__

References: Essential JS Design Patterns
By Addy Osmani (@addyosmani)

See https://addyosmani.com/resources/essentialjsdesignpatterns/book/

__