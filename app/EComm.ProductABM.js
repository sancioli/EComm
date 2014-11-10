(function(){
  'use strict';

  EComm.module('ProductABM', function (ProductABM, App, Backbone, Marionette) {
    // ProductABM Router
    // ---------------
    //
    // Handle routes to show the product abm
    ProductABM.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'products': 'productABM'
      }
    });

    // ProductABM Controller (Mediator)
    // ------------------------------
    //
    // Control the workflow and logic that exists at the application
    // level, above the implementation detail of views and models
      ProductABM.Controller = Marionette.Controller.extend({
        
        initialize: function () {
            this.productList = new EComm.Products.ProductList();
        },

        productABM: function () {
          this.productList.fetch();

          App.main.show(new EComm.Layouts.ProductABM());

          App.main.currentView.list.show(new EComm.ProductList.Views.ListView({
            collection: this.productList
          }));
            
        }
      });

    // ProductABM Initializer
    // --------------------
    //
    ProductABM.addInitializer(function () {
      var controller = new ProductABM.Controller();
      controller.router = new ProductABM.Router({
        controller: controller
      });
    });

  });

}());