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
});