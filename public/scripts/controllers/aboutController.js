'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    console.log('about');
    $('.tab-content').hide();
    $('#about').fadeIn(350);
  }

  module.aboutController = aboutController;
})(app);
