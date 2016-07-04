// js/routers/router.js

// Todo Router
// ----------

var app = app || {};

var Workspace = Backbone.Router.extend({
  routes:{
    '*filter': 'setFilter'
  },

  setFilter: function( param ) {
	console.log('routers/router.js - inside app.ToDoRouter setFilter(param)');
    // Set the current filter to be used
    if (param) {
      param = param.trim();
    }
    app.TodoFilter = param || '';

    // Trigger a collection filter event, causing hiding/unhiding
    // of Todo view items
    app.Todos.trigger('filter');
  }
});

app.TodoRouter = new Workspace();
Backbone.history.start();