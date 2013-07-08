define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\" disabled>\n  <h2>zveloNET Lookup</h2>\n  <form class=\"form-inline\" id=\"zvelo-lookup\">\n    <input type=\"text\" class=\"input-block-level\" id=\"zvelo-url\" placeholder=\"http://zvelo.com\">\n    <button type=\"submit\" id=\"zvelo-submit\" class=\"btn btn-large btn-primary\">Lookup</button>\n  </form>\n</div>\n";
  })

});