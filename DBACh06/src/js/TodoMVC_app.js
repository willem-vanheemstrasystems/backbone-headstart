// js/TodoMVC.js

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