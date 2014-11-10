(function(){
	'use strict';

	EComm.module('ProductList', function (ProductList, App, Backbone, Marionette) {
		// ProductList Router
		// ---------------
		//
		// Handle routes to show the product items
		ProductList.Router = Marionette.AppRouter.extend({
			appRoutes: {
				'': 'start'
			}
		});

		// ProductList Controller (Mediator)
		// ------------------------------
		//
		// Control the workflow and logic that exists at the application
		// level, above the implementation detail of views and models
	    ProductList.Controller = Marionette.Controller.extend({
	        initialize: function () {
	            this.productList = new EComm.Products.ProductList();
	        },
			// Start the app by showing the appropriate views
			// and fetching the list of todo items, if there are any
			start: function () {
				this.showProductList(this.productList);
				this.productList.fetch();
			},
			showProductList: function (productList) {
				App.main.show(new ProductList.Views.ListView({
					collection: productList
				}));
			}
		});

		// ProductList Initializer
		// --------------------
		//
		// Get the ProductList up and running by initializing the mediator
		// when the the application is started, pulling in all of the
		// existing Product items and displaying them.
		ProductList.addInitializer(function () {
			var controller = new ProductList.Controller();
			controller.router = new ProductList.Router({
				controller: controller
			});
		});
	});

}());