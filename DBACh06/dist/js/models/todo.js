// js/models/todo.js

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has `title` and `completed` attributes.

app.Todo = Backbone.Model.extend({

// Default attributes ensure that each todo created has `title` and `completed` keys.
defaults: {
  title: '',
  completed: false
},

// Toggle the `completed` state of this todo item.
toggle: function() {
  console.log('models/todo.js - inside app.Todo toggle()');
  this.save({
    completed: !this.get('completed')
  });
}

});