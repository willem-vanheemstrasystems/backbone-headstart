define(
  [ "underscore",
    "backbone",
    "js/views/stockitemcollectionview",
    "js/collections/stockcart",
    "text!templates/stockView.html"
  ], function(_, Backbone, ItemCollectionView, Cart, stockView) {
  var CartCollectionView = Backbone.View.extend({
    el: "body",
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
});