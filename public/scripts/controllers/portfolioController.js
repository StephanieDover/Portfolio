'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.init = function() {
    $('.tab-content').hide();
    $('#home').fadeIn(350);
    app.Portfolio.fetchAll();
  }

  module.portfolioController = portfolioController;
})(app);
