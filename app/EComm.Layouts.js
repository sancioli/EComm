(function(){
  'use strict';

  EComm.module('Layouts', function (Layouts, App, Backbone, Marionette) {
    
    Layouts.ProductABM = Backbone.Marionette.LayoutView.extend({
      template: Hbs.Templates["productABM.hbs"],
      regions: {
        list: "#list",
        item: "#item"
      }

    });

  });

}());