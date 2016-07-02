// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {

  // Kick things off by creating the **App**.
  console.log('app.js - new app.AppView()');
  new app.AppView();

});;// js/collections/todos.js

var app = app || {};

// Todo Collection
// ---------------

// The collection of todos is backed by *localStorage* instead of a remote
// server.
var TodoList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: app.Todo,

  // Save all of the todo items under the `"todos-backbone"` namespace.
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  // Filter down the list of all todo items that are finished.
  completed: function() {
	console.log('collections/todos.js - inside TodoList completed()');
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function() {
	console.log('collections/todos.js - inside TodoList remaining()');
    return this.without.apply( this, this.completed() );
  },

  // We keep the Todos in sequential order, despite being saved by unordered
  // GUID in the database. This generates the next order number for new items.
  nextOrder: function() {
	console.log('collections/todos.js - inside TodoList nextOrder()');
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // Todos are sorted by their original insertion order.
  comparator: function( todo ) {
	console.log('collections/todos.js - inside TodoList comparator()');
    return todo.get('order');
  }
});

// Create our global collection of **Todos**.
app.Todos = new TodoList();;// js/models/todo.js

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

});;// js/routers/router.js

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
Backbone.history.start();;// js/views/app.js

var app = app || {};

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '#todoapp',

  // Our template for the line of statistics at the bottom of the app.
  statsTemplate: _.template( $('#stats-template').html() ),

  // Delegated events for creating new items, and clearing completed ones.
  events: {
    'keypress #new-todo': 'createOnEnter',
    'click #clear-completed': 'clearCompleted',
    'click #toggle-all': 'toggleAllComplete'
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added or changed. Kick things off by
  // loading any pre-existing todos that might be saved in *localStorage*.
  initialize: function() {
	console.log('views/app.js - inside app.AppView initialize()');
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos,'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  // Re-rendering the App just means refreshing the statistics -- the rest
  // of the app doesn't change.
  render: function() {
	console.log('views/app.js - inside app.AppView render()');  
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if ( app.Todos.length ) {
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
      }));

      this.$('#filters li a')
        .removeClass('selected')
        .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
        .addClass('selected');
    } else {
      this.$main.hide();
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining;
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function( todo ) {
	console.log('views/app.js - inside app.AppView addOne(todo)');
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append( view.render().el );
  },

  // Add all items in the **Todos** collection at once.
  addAll: function() {
	console.log('views/app.js - inside app.AppView addAll()');
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  },

  filterOne : function (todo) {
	console.log('views/app.js - inside app.AppView filterOne(todo)');
    todo.trigger('visible');
  },

  filterAll : function () {
	console.log('views/app.js - inside app.AppView filterAll()');	  
    app.Todos.each(this.filterOne, this);
  },

  // Generate the attributes for a new Todo item.
  newAttributes: function() {
	console.log('views/app.js - inside app.AppView newAttributes()');
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder(),
      completed: false
    };
  },

  // If you hit return in the main input field, create new Todo model,
  // persisting it to localStorage.
  createOnEnter: function( event ) {
	console.log('views/app.js - inside app.AppView createOnEnter(event)');
    if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
      return;
    }

    app.Todos.create( this.newAttributes() );
    this.$input.val('');
  },

  // Clear all completed todo items, destroying their models.
  clearCompleted: function() {
	console.log('views/app.js - inside app.AppView clearCompleted()');
    _.invoke(app.Todos.completed(), 'destroy');
    return false;
  },

  toggleAllComplete: function() {
	console.log('views/app.js - inside app.AppView toggleAllComplete()');
    var completed = this.allCheckbox.checked;

    app.Todos.each(function( todo ) {
      todo.save({
        'completed': completed
      });
    });
  }
});;// js/views/todos.js

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
