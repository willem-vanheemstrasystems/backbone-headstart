// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    bodyParser = require('body-parser'), //Parser for reading request body
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

//Connect to database, using global Promise library
mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost/library_database' );

//Schemas
var Keywords = new mongoose.Schema({
    keyword: String
});
// Note: To add a sub schema to an existing schema, 
// use brackets notation
var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [ Keywords ]
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

/** 
 * API
 * url             HTTP Method  Operation
 * /api/books      GET          Get an array of all books
 * /api/books/:id  GET          Get the book with id of :id
 * /api/books      POST         Add a new book and return the book with an id attribute added
 * /api/books/:id  PUT          Update the book with id of :id
 * /api/books/:id  DELETE       Delete the book with id of :id
 */

//Routes
App.get( '/api', function( request, response ) {
    response.send( 'Library API is running' );
});

//Get a list of all books
App.get( '/api/books', function( request, response ) {
    return BookModel.find( function( err, books ) {
        if( !err ) {
            return response.send( books );
        } else {
            return console.log( err );
        }
    });
});

//Get a single book by id
App.get( '/api/books/:id', function( request, response ) {
    return BookModel.findById( request.params.id, function( err, book ) {
        if( !err ) {
            return response.send( book );
        } else {
            return console.log( err );
        }
    });
});

//Insert a new book
App.post( '/api/books', function( request, response ) {
    var book = new BookModel({
        title: request.body.title,
        author: request.body.author,
        releaseDate: request.body.releaseDate,
        keywords: request.body.keywords
    });
    book.save( function( err ) {
        if( !err ) {
            console.log( 'created' );
            return response.send( book );
        } else {
            return console.log( err );
        }
    });
});

//Update a book
App.put( '/api/books/:id', function( request, response ) {
    console.log( 'Updating book ' + request.body.title );
    return BookModel.findById( request.params.id, function( err, book ) {
        book.title = request.body.title;
        book.author = request.body.author;
        book.releaseDate = request.body.releaseDate;
        book.keywords = request.body.keywords;
        return book.save( function( err ) {
            if( !err ) {
                console.log( 'book updated' );
            } else {
                console.log( err );
            }
            return response.send( book );
        });
    });
});

//Delete a book
App.delete( '/api/books/:id', function( request, response ) {
    console.log( 'Deleting book with id: ' + request.params.id );
    return BookModel.findById( request.params.id, function( err, book ) {
        return book.remove( function( err ) {
            if( !err ) {
                console.log( 'Book removed' );
                return response.send( '' );
            } else {
                console.log( err );
            }
        });
    });
});

//Start server
var app_port = 4712;

Server.app_server = App.listen( app_port, function() {
    console.log( 'Express server listening on port %d in %s mode', app_port, App.settings.env );
});