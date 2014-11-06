(function() {

  "use strict";

  // TodoMVC is global for developing in the console
  // and functional testing.
  window.app = window.EComm = new Backbone.Marionette.Application();

  /*TodoMVC.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
  });*/

  EComm.on('start', function () {
    Backbone.history.start();
  });
   
}());
