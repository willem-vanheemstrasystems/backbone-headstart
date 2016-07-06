# backbone-headstart
Backbone - Headstart

References: Developing Backbone.js Applications
By Addy Osmani (@addyosmani)

See https://addyosmani.com/backbone-fundamentals/

Uses: https://github.com/jeromegn/Backbone.localStorage

#Chapter 01 Prelude
Introduces Backbone.

See also the Backbone wiki at https://github.com/documentcloud/backbone/wiki/

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

##Marionette

Revisits the Todo Application of Chapter 4, using Marionette's Regions.

To run the code, do the following:
- Inside the DBACh06 project directory run: npm install
- Run: bower install
- Run: grunt distribute
- Run: npm start-todo
- Open a web browser at: http://localhost:4711/todo.html  or TodoMVC.html (uses Marionette)

##Thorax

Thorax makes an opinionated decision to use Handlebars as its templating solution. Thorax.View differs from Backbone.View in that there is no options object. All arguments passed to the constructor become properties of the view, which in turn become available to the template. The view helper allows you to embed other views within a view.

#Chapter 7 - Common Problems and Solutions
Reviews common issues you may encounter when using Backbone.js and ways of addressing them.

##Working With Nested Views (i.e. Subviews)

''''
this.children = {};
this.child = new Backbone.View();
this.children[this.child.cid] = this.child;
''''

Using cids (client id's) allows for direct references to views. The Backbone extensions Marionette and Thorax provide logic for nesting views, and rendering collections where each item has an associated view. 

##Managing Models In Nested Views

One approach is to make sure each child model has a ‘parent’ attribute. This way you can traverse the nesting first up to the parent and then down to any siblings that you know of.

This allows you to reach the parent model in any child model function through this.parent.

##Rendering A Parent View From A Child View

The parent view can bind notifications on the child view to know when the event has occurred. It can then render itself. The child will trigger a “somethingHappened” event and the parent’s render function will be called.

##Disposing View Hierarchies

A close() method for views is implemented which disposes of a view when it is no longer needed or needs to be reset.

##Rendering View Hierarchies

In the Backbone.Marionette framework is a type of view called a CompositeView. It can render a model and a collection within the same view. It can render a single model with a template. It can also take a collection from that model and for each model in that collection, render a view.

See http://jsfiddle.net/derickbailey/AdWjU/

##Working With Nested Models Or Collections

There are also a number of Backbone plugins which can help with nested data structures, such as Backbone Relational. This plugin handles one-to-one, one-to-many and many-to-one relations between models for Backbone and has some excellent documentation.

##Better Model Property Validation

Use [@gfranko](http://github.com/@franko)’s Backbone.validateAll plugin, specifically created to validate specific Model properties (or form fields) without worrying about the validation of any other Model properties (or form fields).

##Avoiding Conflicts With Multiple Backbone Versions

var Backbone19 = Backbone.noConflict();
// Backbone19 refers to the most recently loaded version,
// and `window.Backbone` will be restored to the previously
// loaded version

##Building Model And View Hierarchies

Underscore’s extend method is called to add the parent class’s methods to the new child class. Underscore’s extend method is called twice to add the static and instance methods to the child class

Extend one View using another:

''''
var Panel = Backbone.View.extend({});

var PanelAdvanced = Panel.extend({});
''''

When used appropriately, Underscore’s extend method can save a great deal of time and effort writing redundant code.

Backbone-Super by Lukas Olson adds a *super* method to Backbone.Model.

##Event Aggregators And Mediators

The core idea of the **Event Aggregator**, according to Martin Fowler, is to channel multiple event sources through a single object so that other objects needing to subscribe to the events don’t need to know about every event source – it’s built into the Backbone object directly. An event aggregator facilitates a “fire and forget” model of communication. jQuery’s 'on' method is an example of an event aggregator.

A **Mediator** is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input. Its purpose is to control the workflow between objects. A mediator, though, might use events to make decisions, but it is definitely not “fire and forget”. A wizard interface is a good example of a Mediator. There are multiple views that facilitate the entire workflow of the wizard. Rather than tightly coupling the view together by having them reference each other directly, we can decouple them and more explicitly model the workflow between them by introducing a mediator.

#Chapter 8 - Modular Development
Looks at how AMD modules and RequireJS can be used to modularize your code.

##Organizing modules with RequireJS and AMD

RequireJS implements the Asynchronous Module Definition (AMD) Specification which defines a method for writing modular code and managing dependencies.

Example of an AMD module (compatible with RequireJS):

''''
// A module ID has been omitted here to make the module anonymous

define(function(require){
        // module definition function
    // dependencies (foo and bar) are defined as local vars
    var foo = require('foo'),
        bar = require('bar');
    // return a value that defines the module export
    // (i.e the functionality we want to expose for consumption)
    // create your module here
    var myModule = {
        doStuff:function(){
            console.log('Yay! Stuff');
        }
    }
    return myModule;
});
''''

See also 'Writing Modular JS' at http://addyosmani.com/writing-modular-js/

##Stock application for a manager of a shop.

To demonstrate use of RequireJS and AMD. Source from https://github.com/javascript-playground/backbone-require-example

To run the code, do the following:
- Inside the DBACh08 project directory run: npm install
- Run: bower install
- Run: grunt distribute
- Run: npm start-stock
- Open a web browser at: http://localhost:4711/stock.html

See also https://cdnjs.com/libraries/backbone.js/tutorials/organizing-backbone-using-modules

RequireJS has a special plugin called text.js which is used to load in text file dependencies. We use it to load in template files. When the text! prefix is used for a dependency, RequireJS will automatically load the text plugin and treat the dependency as a text resource.


A command-line optimization tool for RequireJS projects called r.js (Optimizer) is available to help with this workflow. It offers a number of capabilities, including:

- Concatenating specific scripts and minifying them using external tools such as UglifyJS (which is used by default) or Google’s Closure Compiler for optimal browser delivery, whilst preserving the ability to dynamically load modules
- Optimizing CSS and stylesheets by inlining CSS files imported using @import, stripping out comments, etc.
- The ability to run AMD projects in both Node and Rhino

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