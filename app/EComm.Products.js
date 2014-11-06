(function(){

  'use strict';

  EComm.module('Products', function (Products, App, Backbone) {
    
    // Product Model
    // ----------
    Products.Product = Backbone.Model.extend({
      idAttribute: "_id",
      defaults: {
        title: "",
        description: "",
        style: "",
        modified: 0
      },
      validate: function(attrs) {
              if (attrs.hasOwnProperty('title') && !_.isString(attrs.title)) {
                  return 'Product.title must be a string value.';
              }
          }
    });


    // Product Collection
    // ---------------
    Products.ProductList = Backbone.Collection.extend({
      url : "/api/products",
      model: Products.Product
    });

    
  });

}());
