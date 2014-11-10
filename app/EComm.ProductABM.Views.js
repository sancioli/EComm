(function(){

  'use strict';

  EComm.module('ProductABM.Views', function (Views, App, Backbone, Marionette) {
    // Product Edit View
    // -------------------
    //
    // Display an individual product item, and respond to changes
    // that are made to the item
    Views.ItemView = Marionette.ItemView.extend({
      template: Hbs.Templates["productEdit.hbs"]
    });

  });

}());
