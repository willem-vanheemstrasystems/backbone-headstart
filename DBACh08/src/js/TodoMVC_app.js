// js/TodoMVC.js

// Configuration of RequireJS
// When specifying paths for RequireJS 
// you should omit the .js 
// from the end of script names.
require.config({
    // your configuration key/values here
    baseUrl: ".", // generally the same directory as the script used in a data-main attribute for the top level script
    paths: {
      'underscore': '../vendor/underscore/underscore',
      'backbone': '../vendor/backbone/backbone',
      'jquery': '../vendor/jquery/jquery'
    }, // set up custom paths to libraries, or paths to RequireJS plugins
    shim: {
      'underscore': {
        exports: '_'
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'jquery': {
    	exports: '$'
      }
    }, // used for setting up all Shims
});

var TodoMVC = new Backbone.Marionette.Application();

TodoMVC.addRegions({
  header: '#header',
  main: '#main',
  footer: '#footer'
});

//ORIGINAL TodoMVC.on('start', function() {
TodoMVC.on('initialize:after', function() {	
  Backbone.history.start();
});