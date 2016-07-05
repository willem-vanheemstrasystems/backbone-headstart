define(["vendor/underscore/underscore",
        "vendor/backbone/backbone"], 
		function(_, Backbone) {
  var Item = Backbone.Model.extend({
    defaults: {
      price: 35,
      photo: "http://www.placedog.com/100/100"
    }
  });
  return Item;
});