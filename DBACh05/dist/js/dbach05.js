// js/app.js

var app = app || {};

$(function() {
	/**
	 * OLD
	 *
     * var books = [
     *   { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
     *   { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
     *   { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
     *   { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
     *   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
     * ];
     */

	// Bind a date picker to the release date field
    $( '#releaseDate' ).datepicker();
    
    //OLD new app.LibraryView( books );
    new app.LibraryView();
});;// js/collections/library.js

var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'
});;// js/models/book.js

var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/placeholder.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },
    parse: function( response ) {
        response.id = response._id;
        return response;
    }
});;// js/views/book.js

var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $( '#bookTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    },
    
    events: {
        'click .delete': 'deleteBook'
    },

    deleteBook: function() {
        //Delete model
        this.model.destroy();

        //Delete view
        this.remove();
    }
});;// js/views/library.js

var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function() {
    	//OLD this.collection = new app.Library( initialBooks );
        this.collection = new app.Library();
        this.collection.fetch({reset: true});
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render );
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    },
    
    events:{
        'click #add':'addBook'
    },

    addBook: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() != '' )
            {
                if( el.id === 'keywords' ) {
                    formData[ el.id ] = [];
                    _.each( $( el ).val().split( ' ' ), function( keyword ) {
                        formData[ el.id ].push({ 'keyword': keyword });
                    });
                } else if( el.id === 'releaseDate' ) {
                    formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
                } else {
                    formData[ el.id ] = $( el ).val();
                }
            }
            // Clear input field value
            $( el ).val('');
        });

        this.collection.create( formData );
    }
});