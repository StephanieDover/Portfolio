'use strict';

var portfolios = [];

function Portfolio(portfolioData) {
  this.title = portfolioData.title;
  this.imageURL = portfolioData.siteImageUrl;
  this.siteURL = portfolioData.siteURL;
  this.description = portfolioData.about;
}
Portfolio.prototype.toHtml = function() {
  var template = $('.portfolio-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

portfolioData.forEach(function(portfolioObject) {
  portfolios.push(new Portfolio(portfolioObject));
});

portfolios.forEach(function(portfolio){
  $('.portfolio').append(portfolio.toHtml());
});
