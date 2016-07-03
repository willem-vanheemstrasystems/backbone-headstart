// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    bodyParser = require('body-parser'), //Parser for reading request body
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

//Connect to database
mongoose.connect( 'mongodb://localhost/library_database' );

//Schemas
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

//Models
var BookModel = mongoose.model( 'Book', Book );

//Create server
var Server = express();

/*
* APP - The Application
*/
var App = express();
/*
* APP DEVELOPMENT
*
* .bash_profile contains
* NODE_ENV=development
*
* or start server as follows
* NODE_ENV=development node server.js
*
* on Windows use
* set NODE_ENV=development
* check with
* echo %NODE_ENV%
*/
if('development' == App.settings.env) {
  console.log("Using development configurations");
  
  // Parses request body and populates request.body
  App.use(bodyParser.urlencoded({
  	extended: true
  })); // NEW IN CONNECT 3.0
  App.use(bodyParser.json()); // NEW IN CONNECT 3.0

  // Checks request.body for HTTP method overrides
  App.use( methodOverride() );  

  // Perform route lookup based on url and HTTP method
  // App.use( App.router ); DEPRECATED !!
  
  // Where to serve static content
  App.use( express.static( path.join( application_root,'../', 'dist') ) );

  // Show all errors in development
  App.use( errorHandler({ dumpExceptions: true, showStack: true }));  

}

/*
* APP PRODUCTION
*
* .bash_profile contains
* NODE_ENV=production
*
* or start server as follows
* NODE_ENV=production node server.js
*
* on Windows use
* set NODE_ENV=production
* check with
* echo %NODE_ENV%
*/
if('production' == App.settings.env){
  console.log("Using production configurations");

  // Parses request body and populates request.body
  App.use(bodyParser.urlencoded({
  	extended: true
  })); // NEW IN CONNECT 3.0
  App.use(bodyParser.json()); // NEW IN CONNECT 3.0

  // Checks request.body for HTTP method overrides
  App.use( methodOverride() );  

  // Perform route lookup based on url and HTTP method
  // App.use( App.router );  DEPRECATED !!
  
  // Where to serve static content
  App.use( express.static( path.join( application_root,'../', 'dist') ) );
  
}

//Routes
App.get( '/api', function( request, response ) {
    response.send( 'Library API is running' );
});

//Start server
var app_port = 4712;

Server.app_server = App.listen( app_port, function() {
    console.log( 'Express server listening on port %d in %s mode', app_port, App.settings.env );
});