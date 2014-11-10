(function(){

  'use strict';

  EComm.module('ProductList.Views', function (Views, App, Backbone, Marionette) {
    // Product List Item View
    // -------------------
    //
    // Display an individual product item, and respond to changes
    // that are made to the item
    Views.ItemView = Marionette.ItemView.extend({
      tagName: 'li',
      template: Hbs.Templates["product.hbs"],

      ui: {
        item: 'div.productItem'
      },

      events: {
        'click @ui.item' : 'onUserSelection'
      },

      onUserSelection: function(e) {
        this.model.setSelected(true);
      }

    });

    // Item List View
    // --------------
    //
    // Controls the rendering of the list of items
    Views.ListView = Backbone.Marionette.CompositeView.extend({
      template: Hbs.Templates["productList.hbs"],
      childView: Views.ItemView,
      childViewContainer: '#product-list',
      
      searchText: "",

      ui: {
        search: 'a#search',
        searchInput: 'input#searchText'
      },

      events:{
        'click @ui.search' : 'onSearchClick'
      },

      serializeData: function () {
        return { searchText: this.searchText };
      },

      addChild: function(child, ChildView, index){
        if(child.searchMatch(this.searchText)) {
            Backbone.Marionette.CollectionView.prototype.addChild.apply(this, arguments);
        }
      },

      onSearchClick: function(e) {
        e.preventDefault();
        this.searchText = $(this.ui.searchInput).val();
        this.render();
      }

    });

  });

}());




