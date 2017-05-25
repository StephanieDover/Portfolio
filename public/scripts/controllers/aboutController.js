'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(350);
    app.repos.requestRepos(app.repoView.index);
  }

  module.aboutController = aboutController;
})(app);
