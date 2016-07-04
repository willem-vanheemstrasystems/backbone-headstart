// js/views/todos.js

var app = app || {};

// Todo Item View
// --------------

// The DOM element for a todo item...
app.TodoView = Backbone.View.extend({

  //... is a list tag.
  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template( $('#item-template').html() ),

  // The DOM events specific to an item.
  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'click .destroy': 'clear',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function() {
	console.log('views/todos.js - inside app.TodoView initialize()');
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'visible', this.toggleVisible);
  },

  // Re-render the titles of the todo item.
  render: function() {
	console.log('views/todos.js - inside app.TodoView render()');
    this.$el.html( this.template( this.model.attributes ) );

    this.$el.toggleClass( 'completed', this.model.get('completed') );
    this.toggleVisible();

    this.$input = this.$('.edit');
    return this;
  },

  // Toggles visibility of item
  toggleVisible : function () {
	console.log('views/todos.js - inside app.TodoView toggleVisible()');
    this.$el.toggleClass( 'hidden',  this.isHidden());
  },

  // Determines if item should be hidden
  isHidden : function () {
	console.log('views/todos.js - inside app.TodoView isHidden()');
    var isCompleted = this.model.get('completed');
    return ( // hidden cases only
      (!isCompleted && app.TodoFilter === 'completed') || (isCompleted && app.TodoFilter === 'active')
    );
  },

  // Toggle the `"completed"` state of the model.
  toggleCompleted: function() {
	console.log('views/todos.js - inside app.TodoView toggleCompleted()');
    this.model.toggle();
  },

  // Switch this view into `"editing"` mode, displaying the input field.
  edit: function() {
	console.log('views/todos.js - inside app.TodoView edit()');
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // Close the `"editing"` mode, saving changes to the todo.
  close: function() {
	console.log('views/todos.js - inside app.TodoView close()');
    var value = this.$input.val().trim();

    if ( value ) {
      this.model.save({ title: value });
    } else {
      this.clear();
    }

    this.$el.removeClass('editing');
  },

  // If you hit `enter`, we're through editing the item.
  updateOnEnter: function( e ) {
  console.log('views/todos.js - inside app.TodoView updateOnEnter(e)');
    if ( e.which === ENTER_KEY ) {
      this.close();
    }
  },

  // Remove the item, destroy the model from *localStorage* and delete its view.
  clear: function() {
    console.log('views/todos.js - inside app.TodoView clear()');
    this.model.destroy();
  }
});
