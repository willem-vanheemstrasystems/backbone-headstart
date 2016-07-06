require.config({
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
);