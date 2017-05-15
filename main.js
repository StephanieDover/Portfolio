'use strict';

var portfolios = [];

function Portfolio(portfolioData) {
  this.title = portfolioData.title;
  this.imageURL = portfolioData.siteImageUrl;
  this.siteURL = portfolioData.siteURL;
  this.descritpion = portfolioData.about;
}
Portfolio.prototype.toHtml = function() {
  var template = Handlebars.compile($('.portfolio-template').text());
  console.log(template(this));
  return template(this);
};

portfolioData.forEach(function(portfolioObject) {
  portfolios.push(new Portfolio(portfolioObject));
});

portfolios.forEach(function(portfolio){
  $('.portfolio').append(portfolio.toHtml());
});
;
