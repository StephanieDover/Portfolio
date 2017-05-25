'use strict';
var app = app || {};

page('/', app.portfolioController.init);
page('/about', app.aboutController.init);

page();
