'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.init = function() {
    console.log('articles');
    $('.tab-content').hide();
    $('#home').fadeIn(350);
    console.log(app);
    app.Portfolio.fetchAll();
  }

  module.portfolioController = portfolioController;
})(app);
