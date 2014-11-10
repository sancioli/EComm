this["Hbs"] = this["Hbs"] || {};
this["Hbs"]["Templates"] = this["Hbs"]["Templates"] || {};

this["Hbs"]["Templates"]["product.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"productItem\",>\r\n	<p>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n	<p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});



this["Hbs"]["Templates"]["productABM.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\">\r\n  <div id=\"list\" class=\"small-6 column\"></div>\r\n  <div id=\"item\" class=\"small-6 column\"></div>\r\n</div>";
  },"useData":true});



this["Hbs"]["Templates"]["productEdit.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<input id=\"title\" type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n<input id=\"description\" type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\">";
},"useData":true});



this["Hbs"]["Templates"]["productList.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"row\">\r\n	<div class=\"small-6 small-offset-3 columns end\">\r\n		<div class=\"row collapse postfix-round\">\r\n        	<div class=\"small-9 columns\">\r\n          		<input id=\"searchText\" type=\"text\" value=\""
    + escapeExpression(((helper = (helper = helpers.searchText || (depth0 != null ? depth0.searchText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"searchText","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Search...\">\r\n        	</div>\r\n        	<div class=\"small-3 columns\">\r\n          		<a id=\"search\" href=\"#\" class=\"button postfix\">Go</a>\r\n        	</div>\r\n      	</div>\r\n	</div>\r\n</div>\r\n<div class=\"row\">\r\n	<div class=\"small-12 column\">\r\n		<ul id=\"product-list\" class=\"small-block-grid-4\"></ul>\r\n	</div>\r\n</div>\r\n";
},"useData":true});