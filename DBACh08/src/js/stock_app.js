require.config({
  baseUrl: "../", // generally the same directory as the script used in a data-main attribute for the top level script
  paths: {
    'jquery': 'vendor/jquery/jquery'
  },
  shim: {
    'vendor/underscore/underscore': {
      exports: '_'
    },
    'vendor/backbone/backbone': {
      deps: ["vendor/underscore/underscore", "jquery"],
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
    "vendor/underscore/underscore",
    "vendor/backbone/backbone",
    "js/views/stockcartcollectionview"
  ],
  function($, _, Backbone, CartCollectionView) {
    $(function() {
      new CartCollectionView(items);
    });
  }
);