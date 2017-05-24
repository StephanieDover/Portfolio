'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.init = function() {
    console.log('articles');
    $('.tab-content').hide();
    $('.portfolio').fadeIn(350);
  }

  module.portfolioController = portfolioController;
})(app);
