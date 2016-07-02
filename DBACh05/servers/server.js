// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    bodyParser = require('body-parser'), //Parser for reading request body
    path = require( 'path' ); //Utilities for dealing with file paths
    //mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
var server = express();

//Where to serve static content
server.use( express.static( path.join( application_root,'../', 'dist') ) );
server.use(bodyParser.urlencoded({
  	extended: true
})); // NEW IN CONNECT 3.0
server.use(bodyParser.json()); // NEW IN CONNECT 3.0

//Start server
var port = 4712;

server.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, server.settings.env );
});