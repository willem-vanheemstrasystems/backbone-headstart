(function( window ) {
	'use strict';

	if ( location.hostname === 'todomvc.com' ) {
		var _gaq=[['_setAccount','UA-31081062-1'],['_trackPageview']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='//www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s);}(document,'script'));
	}
})( window );
;//Filename: boilerplate.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // vendor/jquery/jquery
  'underscore', // vendor/underscore/underscore
  'backbone'    // vendor/backbone/backbone
], function($, _, Backbone){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  return {};
  // What we return here will be used by other modules
});;// js/collections/library.js

var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'
});;define(["underscore",
        "backbone", 
        "js/models/stockitem"], 
        function(_, Backbone, Item) {
  var Cart = Backbone.Collection.extend({
    model: Item,
    initialize: function() {
      this.on("add", this.updateSet, this);
    },
    updateSet: function() {
      items = this.models;
    }
  });
  return Cart;
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
app.Todos = new TodoList();;/*! HTML5 Shiv pre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
  Uncompressed source: https://github.com/aFarkas/html5shiv  */
  (function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
  a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
  c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
  "undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
  for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

/* ES5-shim
https://github.com/kriskowal/es5-shim
Copyright 2009-2012 by contributors, MIT License */
(function(definition){if(typeof define=="function")define(definition);else if(typeof YUI=="function")YUI.add("es5",definition);else definition()})(function(){if(!Function.prototype.bind)Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function")throw new TypeError("Function.prototype.bind called on incompatible "+target);var args=slice.call(arguments,1);var bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));if(Object(result)===
result)return result;return this}else return target.apply(that,args.concat(slice.call(arguments)))};if(target.prototype)bound.prototype=Object.create(target.prototype);return bound};var call=Function.prototype.call;var prototypeOfArray=Array.prototype;var prototypeOfObject=Object.prototype;var slice=prototypeOfArray.slice;var _toString=call.bind(prototypeOfObject.toString);var owns=call.bind(prototypeOfObject.hasOwnProperty);var defineGetter;var defineSetter;var lookupGetter;var lookupSetter;var supportsAccessors;
if(supportsAccessors=owns(prototypeOfObject,"__defineGetter__")){defineGetter=call.bind(prototypeOfObject.__defineGetter__);defineSetter=call.bind(prototypeOfObject.__defineSetter__);lookupGetter=call.bind(prototypeOfObject.__lookupGetter__);lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)}if([1,2].splice(0).length!=2){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){if(!arguments.length)return[];else return array_splice.apply(this,[start===void 0?
0:start,deleteCount===void 0?this.length-start:deleteCount].concat(slice.call(arguments,2)))}}if(!Array.isArray)Array.isArray=function isArray(obj){return _toString(obj)=="[object Array]"};var boxedString=Object("a"),splitString=boxedString[0]!="a"||!(0 in boxedString);if(!Array.prototype.forEach)Array.prototype.forEach=function forEach(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(_toString(fun)!=
"[object Function]")throw new TypeError;while(++i<length)if(i in self)fun.call(thisp,self[i],i,object)};if(!Array.prototype.map)Array.prototype.map=function map(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");for(var i=0;i<length;i++)if(i in self)result[i]=fun.call(thisp,self[i],i,object);return result};
if(!Array.prototype.filter)Array.prototype.filter=function filter(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=[],value,thisp=arguments[1];if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");for(var i=0;i<length;i++)if(i in self){value=self[i];if(fun.call(thisp,value,i,object))result.push(value)}return result};if(!Array.prototype.every)Array.prototype.every=function every(fun){var object=
toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");for(var i=0;i<length;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return false;return true};if(!Array.prototype.some)Array.prototype.some=function some(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>
0,thisp=arguments[1];if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");for(var i=0;i<length;i++)if(i in self&&fun.call(thisp,self[i],i,object))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function reduce(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");if(!length&&arguments.length==
1)throw new TypeError("reduce of empty array with no initial value");var i=0;var result;if(arguments.length>=2)result=arguments[1];else{do{if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError("reduce of empty array with no initial value");}while(true)}for(;i<length;i++)if(i in self)result=fun.call(void 0,result,self[i],i,object);return result};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function reduceRight(fun){var object=toObject(this),self=splitString&&_toString(this)==
"[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]")throw new TypeError(fun+" is not a function");if(!length&&arguments.length==1)throw new TypeError("reduceRight of empty array with no initial value");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else{do{if(i in self){result=self[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value");}while(true)}do if(i in this)result=fun.call(void 0,result,
self[i],i,object);while(i--);return result};if(!Array.prototype.indexOf||[0,1].indexOf(1,2)!=-1)Array.prototype.indexOf=function indexOf(sought){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;if(arguments.length>1)i=toInteger(arguments[1]);i=i>=0?i:Math.max(0,length+i);for(;i<length;i++)if(i in self&&self[i]===sought)return i;return-1};if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1)Array.prototype.lastIndexOf=
function lastIndexOf(sought){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;if(arguments.length>1)i=Math.min(i,toInteger(arguments[1]));i=i>=0?i:length-Math.abs(i);for(;i>=0;i--)if(i in self&&sought===self[i])return i;return-1};if(!Object.keys){var hasDontEnumBug=true,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=
dontEnums.length;for(var key in{"toString":null})hasDontEnumBug=false;Object.keys=function keys(object){if(typeof object!="object"&&typeof object!="function"||object===null)throw new TypeError("Object.keys called on a non-object");var keys=[];for(var name in object)if(owns(object,name))keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;i<ii;i++){var dontEnum=dontEnums[i];if(owns(object,dontEnum))keys.push(dontEnum)}return keys}}var negativeDate=-621987552E5,negativeYearString="-000001";
if(!Date.prototype.toISOString||(new Date(negativeDate)).toISOString().indexOf(negativeYearString)===-1)Date.prototype.toISOString=function toISOString(){var result,length,value,year,month;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");year=this.getUTCFullYear();month=this.getUTCMonth();year+=Math.floor(month/12);month=(month%12+12)%12;result=[month+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];year=(year<0?"-":
year>9999?"+":"")+("00000"+Math.abs(year)).slice(0<=year&&year<=9999?-4:-6);length=result.length;while(length--){value=result[length];if(value<10)result[length]="0"+value}return year+"-"+result.slice(0,2).join("-")+"T"+result.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};var dateToJSONIsSupported=false;try{dateToJSONIsSupported=Date.prototype.toJSON&&(new Date(NaN)).toJSON()===null&&(new Date(negativeDate)).toJSON().indexOf(negativeYearString)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(e){}if(!dateToJSONIsSupported)Date.prototype.toJSON=
function toJSON(key){var o=Object(this),tv=toPrimitive(o),toISO;if(typeof tv==="number"&&!isFinite(tv))return null;toISO=o.toISOString;if(typeof toISO!="function")throw new TypeError("toISOString property is not callable");return toISO.call(o)};if(!Date.parse||"Date.parse is buggy")Date=function(NativeDate){function Date(Y,M,D,h,m,s,ms){var length=arguments.length;if(this instanceof NativeDate){var date=length==1&&String(Y)===Y?new NativeDate(Date.parse(Y)):length>=7?new NativeDate(Y,M,D,h,m,s,ms):
length>=6?new NativeDate(Y,M,D,h,m,s):length>=5?new NativeDate(Y,M,D,h,m):length>=4?new NativeDate(Y,M,D,h):length>=3?new NativeDate(Y,M,D):length>=2?new NativeDate(Y,M):length>=1?new NativeDate(Y):new NativeDate;date.constructor=Date;return date}return NativeDate.apply(this,arguments)}var isoDateExpression=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:\\.(\\d{3}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+
"$");var months=[0,31,59,90,120,151,181,212,243,273,304,334,365];function dayFromMonth(year,month){var t=month>1?1:0;return months[month]+Math.floor((year-1969+t)/4)-Math.floor((year-1901+t)/100)+Math.floor((year-1601+t)/400)+365*(year-1970)}for(var key in NativeDate)Date[key]=NativeDate[key];Date.now=NativeDate.now;Date.UTC=NativeDate.UTC;Date.prototype=NativeDate.prototype;Date.prototype.constructor=Date;Date.parse=function parse(string){var match=isoDateExpression.exec(string);if(match){var year=
Number(match[1]),month=Number(match[2]||1)-1,day=Number(match[3]||1)-1,hour=Number(match[4]||0),minute=Number(match[5]||0),second=Number(match[6]||0),millisecond=Number(match[7]||0),offset=!match[4]||match[8]?0:Number(new NativeDate(1970,0)),signOffset=match[9]==="-"?1:-1,hourOffset=Number(match[10]||0),minuteOffset=Number(match[11]||0),result;if(hour<(minute>0||second>0||millisecond>0?24:25)&&minute<60&&second<60&&millisecond<1E3&&month>-1&&month<12&&hourOffset<24&&minuteOffset<60&&day>-1&&day<dayFromMonth(year,
month+1)-dayFromMonth(year,month)){result=((dayFromMonth(year,month)+day)*24+hour+hourOffset*signOffset)*60;result=((result+minute+minuteOffset*signOffset)*60+second)*1E3+millisecond+offset;if(-864E13<=result&&result<=864E13)return result}return NaN}return NativeDate.parse.apply(this,arguments)};return Date}(Date);if(!Date.now)Date.now=function now(){return(new Date).getTime()};if("0".split(void 0,0).length){var string_split=String.prototype.split;String.prototype.split=function(separator,limit){if(separator===
void 0&&limit===0)return[];return string_split.apply(this,arguments)}}if("".substr&&"0b".substr(-1)!=="b"){var string_substr=String.prototype.substr;String.prototype.substr=function(start,length){return string_substr.call(this,start<0?(start=this.length+start)<0?0:start:start,length)}}var ws="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=
new RegExp("^"+ws+ws+"*"),trimEndRegexp=new RegExp(ws+ws+"*$");String.prototype.trim=function trim(){if(this===undefined||this===null)throw new TypeError("can't convert "+this+" to object");return String(this).replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}function toInteger(n){n=+n;if(n!==n)n=0;else if(n!==0&&n!==1/0&&n!==-(1/0))n=(n>0||-1)*Math.floor(Math.abs(n));return n}function isPrimitive(input){var type=typeof input;return input===null||type==="undefined"||type==="boolean"||type===
"number"||type==="string"}function toPrimitive(input){var val,valueOf,toString;if(isPrimitive(input))return input;valueOf=input.valueOf;if(typeof valueOf==="function"){val=valueOf.call(input);if(isPrimitive(val))return val}toString=input.toString;if(typeof toString==="function"){val=toString.call(input);if(isPrimitive(val))return val}throw new TypeError;}var toObject=function(o){if(o==null)throw new TypeError("can't convert "+o+" to object");return Object(o)}});

/*! createElementNS workaround (IE<9) */
crElNS = ('createElementNS' in document) ? document.createElementNS : function(m,n) { return document.createElement(n); };

/*! outerHTML - https://gist.github.com/1044128 */
"undefined"!==typeof document&&!("outerHTML"in crElNS("http://www.w3.org/1999/xhtml","_"))&&function(a){var c=crElNS("http://www.w3.org/1999/xhtml","_"),a=(a.HTMLElement||a.Element).prototype,e=new XMLSerializer,b=function(){var a;if(document.xmlVersion)return e.serializeToString(this);c.appendChild(this.cloneNode(!1));a=c.innerHTML.replace("><",">"+this.innerHTML+"<");c.innerHTML="";return a},d=function(a){var b=this.parentNode;if(null===b)throw DOMException.code=
DOMException.NOT_FOUND_ERR,DOMException;for(c.innerHTML=a;a=c.firstChild;)b.insertBefore(a,this);b.removeChild(this)};if(Object.defineProperty){b={get:b,set:d,enumerable:!0,configurable:!0};try{Object.defineProperty(a,"outerHTML",b)}catch(f){-2146823252===f.number&&(b.enumerable=!1,Object.defineProperty(a,"outerHTML",b))}}else Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__&&(a.__defineGetter__("outerHTML",b),a.__defineSetter__("outerHTML",d))}(self);
;// js/library_app.js

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
});;define(["underscore",
        "backbone"], 
		function(_, Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      price: 35,
      photo: "http://www.placedog.com/100/100"
    }
  });
  return Item;
});;// js/models/todo.js

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

});;// js/models/TodoMVC.Todos.js

TodoMVC.module('Todos', function(Todos, App, Backbone, Marionette, $, _) {

  // Local Variables
  // ---------------

  var localStorageKey = 'todos-backbone-marionettejs';

  // Todo Model
  // ----------
  
  Todos.Todo = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage(localStorageKey),

    defaults: {
      title: '',
      completed: false,
      created: 0
    },

    initialize: function() {
      if (this.isNew()) {
        this.set('created', Date.now());
      }
    },

    toggle: function() {
      return this.set('completed', !this.isCompleted());
    },

    isCompleted: function() { 
      return this.get('completed'); 
    }
  });

  // Todo Collection
  // ---------------

  Todos.TodoList = Backbone.Collection.extend({
    model: Todos.Todo,

    localStorage: new Backbone.LocalStorage(localStorageKey),

    getCompleted: function() {
      return this.filter(this._isCompleted);
    },

    getActive: function() {
      return this.reject(this._isCompleted);
    },

    comparator: function(todo) {
      return todo.get('created');
    },

    _isCompleted: function(todo) {
      return todo.isCompleted();
    }
  });

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
Backbone.history.start();;// js/routers/TodoMVC.TodoList.js

TodoMVC.module('TodoList', function(TodoList, App, Backbone, Marionette, $, _) {

  // TodoList Router
  // ---------------
  //
  // Handle routes to show the active vs complete todo items

  TodoList.Router = Marionette.AppRouter.extend({
    appRoutes: {
      '*filter': 'filterItems'
    }
  });

  // TodoList Controller (Mediator)
  // ------------------------------
  //
  // Control the workflow and logic that exists at the application
  // level, above the implementation detail of views and models
  
  TodoList.Controller = function() {
    this.todoList = new App.Todos.TodoList();
  };

  _.extend(TodoList.Controller.prototype, {

    // Start the app by showing the appropriate views
    // and fetching the list of todo items, if there are any
    start: function() {
      this.showHeader(this.todoList);
      this.showFooter(this.todoList);
      this.showTodoList(this.todoList);
      
  App.bindTo(this.todoList, 'reset add remove', this.toggleFooter, this);
      this.todoList.fetch();
    },

    showHeader: function(todoList) {
      var header = new App.Layout.Header({
        collection: todoList
      });
      App.header.show(header);
    },

    showFooter: function(todoList) {
      var footer = new App.Layout.Footer({
        collection: todoList
      });
      App.footer.show(footer);
    },

    showTodoList: function(todoList) {
      App.main.show(new TodoList.Views.ListView({
        collection: todoList
      }));
    },
    
    toggleFooter: function() {
      App.footer.$el.toggle(this.todoList.length);
    },

    // Set the filter to show complete or all items
    filterItems: function(filter) {
      App.vent.trigger('todoList:filter', filter.trim() || '');
    }
  });

  // TodoList Initializer
  // --------------------
  //
  // Get the TodoList up and running by initializing the mediator
  // when the the application is started, pulling in all of the
  // existing Todo items and displaying them.
  
  TodoList.addInitializer(function() {

    var controller = new TodoList.Controller();
    new TodoList.Router({
      controller: controller
    });

    controller.start();

  });

});;require.config({
  baseUrl: "../", // generally the same directory as the script used in a data-main attribute for the top level script
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore/underscore',
    'backbone': 'vendor/backbone/backbone',
    'text': 'libs/require/text'
  },
  shim: {
	jquery: {
      exports: '$'
    },
    'underscore': {
      deps: ["jquery"],
      exports: '_'
    },
    'backbone': {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

var items = [
  { title: "Macbook Air", price: 799 },
  { title: "Macbook Pro", price: 999 },
  { title: "The new iPad", price: 399 },
  { title: "Magic Mouse", price: 50 },
  { title: "Cinema Display", price: 799 }
];
require(
  [ "jquery",
    "underscore",
    "backbone",
    "js/views/stockcartcollectionview"
  ],
  function($, _, Backbone, CartCollectionView) {
    $(function() {
      new CartCollectionView(items);
    });
  }
);;// js/todo_app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {

  // Kick things off by creating the **App**.
  console.log('app.js - new app.AppView()');
  new app.AppView();

});;// js/TodoMVC.js

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
            if( $( el ).val() !== '' )
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
});;define(
  [ "underscore",
    "backbone",
    "js/views/stockitemcollectionview",
    "js/collections/stockcart",
    "text!templates/stockView.html"
  ], function(_, Backbone, ItemCollectionView, Cart, stockViewTemplate) {
  var CartCollectionView = Backbone.View.extend({
    el: "body",
    // Our template.
    //OLD stockViewTemplate: _.template( $('#stockViewTemplate').html() ),
    stockViewTemplate: _.template(stockViewTemplate),
    events: {
      "submit #add": "addItem",
      "submit #filter": "filterItems",
      "click #clear-filter": "clearFilter"
    },
    initialize: function(items) {
      cartCollection = new Cart(items);
      this.itemView = new ItemCollectionView(cartCollection);
    },
    addItem: function(e) {
      e.preventDefault();
      this.itemView.addItem();
    },
    filterItems: function(e) {
      e.preventDefault();
      this.itemView.filterByPrice();
    },
    clearFilter: function(e) {
      e.preventDefault();
      this.itemView.clearFilter();
    }
  });
  return CartCollectionView;
});;define(["underscore", 
        "backbone", 
        "js/models/stockitem", 
        "js/views/stockitemview"], 
        function(_, Backbone, Item, ItemView) {
  var ItemCollectionView = Backbone.View.extend({
    el: '#yourcart',
    initialize: function(collection) {
      this.collection = collection;
      this.render();
      this.collection.on("reset", this.render, this);
    },
    render: function() {
      this.$el.html("");
      this.collection.each(function(item) {
        this.renderItem(item);
      }, this);
    },
    renderItem: function(item) {
      var itemView = new ItemView({model: item});
      this.$el.append(itemView.render().el);
    },
    addItem: function() {
      var data = {};
      $("#add").children("input[type='text']").each(function(i, el) {
        data[el.id] = $(el).val();
      });
      var newItem = new Item(data);
      this.collection.add(newItem);
      this.renderItem(newItem);
    },
    filterByPrice: function() {
      // first reset the collection
      // but do it silently so the event doesn't trigger
      this.collection.reset(items, { silent: true });
      var max = parseFloat($("#less-than").val(), 10);
      var filtered = _.filter(this.collection.models, function(item) {
        return item.get("price") < max;
      });
      // trigger reset again
      // but this time trigger the event so the collection view is rerendered
      this.collection.reset(filtered);
    },
    clearFilter: function() {
      $("#less-than").val("");
      this.collection.reset(items);
    }
  });
  return ItemCollectionView;
});
;define(["backbone"], 
		function(Backbone) {
  var ItemView = Backbone.View.extend({
    tagName: "div",
    className: "item-wrap",
    template: _.template($("#itemTemplate").html()),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return ItemView;
});;// js/views/todo_app.js

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
});;// js/views/TodoMVC.Layout.js

TodoMVC.module('Layout', function(Layout, App, Backbone, Marionette, $, _) {
  
  // Layout Header View
  // ------------------

  Layout.Header = Backbone.Marionette.ItemView.extend({
    template: '#template-header',

    // UI Bindings create cached attributes that
    // point to jQuery selected objects.
    ui: {
      input: '#new-todo'
    },

    events: {
      'keypress #new-todo': 'onInputKeypress',
      'blur #new-todo': 'onTodoBlur'
    },

    onTodoBlur: function(){
      var todoText = this.ui.input.val().trim();
      this.createTodo(todoText);
    },

    onInputKeypress: function(e) {
      var ENTER_KEY = 13;
      var todoText = this.ui.input.val().trim();

      if ( e.which === ENTER_KEY && todoText ) {
        this.createTodo(todoText);
        }
      },

    completeAdd: function() {
      this.ui.input.val('');
    },

    createTodo: function(todoText) {
      if (todoText.trim() === ""){ return; }

      this.collection.create({
        title: todoText
      });

      this.completeAdd();
    }
  });

  // Layout Footer View
  // ------------------

  //WAS Layout.Footer = Marionette.Layout.extend({
  Layout.Footer = Backbone.Marionette.Layout.extend({
	template: '#template-footer',

    // UI Bindings create cached attributes that
    // point to jQuery selected objects.
    ui: {
      todoCount: '#todo-count .count',
      todoCountLabel: '#todo-count .label',
      clearCount: '#clear-completed .count',
      filters: "#filters a"
    },

    events: {
      "click #clear-completed": "onClearClick"
    },

    initialize: function() {
      this.bindTo( App.vent, "todoList: filter", this.updateFilterSelection, this );
      this.bindTo( this.collection, 'all', this.updateCount, this );
    },

    onRender: function() {
      this.updateCount();
    },

    updateCount: function() {
      var activeCount = this.collection.getActive().length,
      completedCount = this.collection.getCompleted().length;
      this.ui.todoCount.html(activeCount);

      this.ui.todoCountLabel.html(activeCount === 1 ? 'item' : 'items');
      this.ui.clearCount.html(completedCount === 0 ? '' : '(' + completedCount + ')');
    },

    updateFilterSelection: function( filter ) {
      this.ui.filters
        .removeClass('selected')
        .filter( '[href="#' + filter + '"]')
        .addClass( 'selected' );
    },

    onClearClick: function() {
      var completed = this.collection.getCompleted();
      completed.forEach(function destroy(todo) {
        todo.destroy();
      });
    }
  });

});;// js/views/TodoMVC.TodoList.Views.js

TodoMVC.module('TodoList.Views', function(Views, App, Backbone, Marionette, $, _) {

  // Todo List Item View
  // -------------------
  //
  // Display an individual todo item, and respond to changes
  // that are made to the item, including marking completed.

  Views.ItemView = Marionette.ItemView.extend({
      tagName: 'li',
      template: '#template-todoItemView',

      ui: {
        edit: '.edit'
      },

      events: {
        'click .destroy': 'destroy',
        'dblclick label': 'onEditClick',
        'keypress .edit': 'onEditKeypress',
        'blur .edit'    : 'onEditBlur',
        'click .toggle' : 'toggle'
      },

      initialize: function() {
        this.bindTo(this.model, 'change', this.render, this);
      },

      onRender: function() {
        this.$el.removeClass( 'active completed' );
      
        if ( this.model.get( 'completed' )) {
          this.$el.addClass( 'completed' );
        } else { 
          this.$el.addClass( 'active' );
        }
      },

      destroy: function() {
        this.model.destroy();
      },

      toggle: function() {
        this.model.toggle().save();
      },

      onEditClick: function() {
        this.$el.addClass('editing');
        this.ui.edit.focus();
      },
      
      updateTodo : function() {
        var todoText = this.ui.edit.val();
        if (todoText === '') {
          return this.destroy();
        }
        this.setTodoText(todoText);
        this.completeEdit();
      },

      onEditBlur: function(e){
        this.updateTodo();
      },

      onEditKeypress: function(e) {
        var ENTER_KEY = 13;
        var todoText = this.ui.edit.val().trim();

        /** NEW
         * if ( e.which === ENTER_KEY && todoText ) {
         *   this.model.set('title', todoText).save();
         *   this.$el.removeClass('editing');
         * }
         */
        // ORIGINAL
        if (e.which === ENTER_KEY) {
          this.updateTodo();
        }
        
      },
      
      setTodoText: function(todoText){
        if (todoText.trim() === ""){ return; }
        this.model.set('title', todoText).save();
      },

      completeEdit: function(){
        this.$el.removeClass('editing');
      }
  });

  // Item List View
  // --------------
  //
  // Controls the rendering of the list of items, including the
  // filtering of active vs completed items for display.

  Views.ListView = Backbone.Marionette.CompositeView.extend({
      template: '#template-todoListCompositeView',
      //OLD childView: Views.ItemView,
      itemView: Views.ItemView,      
      //OLD childViewContainer: '#todo-list',
      itemViewContainer: '#todo-list',

      ui: {
        toggle: '#toggle-all'
      },

      events: {
        'click #toggle-all': 'onToggleAllClick'
      },

      initialize: function() {
        this.bindTo(this.collection, 'all', this.update, this);
      },

      onRender: function() {
        this.update();
      },

      update: function() {
        function reduceCompleted(left, right) { 
          return left && right.get('completed'); 
        }
        
        var allCompleted = this.collection.reduce(reduceCompleted,true);
        this.ui.toggle.prop('checked', allCompleted);
        this.$el.parent().toggle(!!this.collection.length);
      },

      onToggleAllClick: function(e) {
        var isChecked = e.currentTarget.checked;
        this.collection.each(function(todo) {
          todo.save({'completed': isChecked});
        });
      }
  });

  // Application Event Handlers
  // --------------------------
  //
  // Handler for filtering the list of items by showing and
  // hiding through the use of various CSS classes
  
  App.vent.on('todoList:filter',function(filter) {
    filter = filter || 'all';
    $('#todoapp').attr('class', 'filter-' + filter);
  });

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
