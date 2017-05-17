'use strict';

var portfolios = [];

function Portfolio() {
  this.title = portfolioData.title;
  this.imageURL = portfolioData.siteImageURL;
  this.siteURL = portfolioData.siteURL;
  this.descritpion = portfolioData.about;
}
Portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('figure.portfolio-item').clone();
  $newArticle.removeClass('portfolio-item');
  $newArticle.find('.site-title').html(this.title);
  $newArticle.find('.img-url').html(this.imgURL);
  $newArticle.find('.site-url').attr('datetime', this.siteURL);
  $newArticle.find('.site-about').attr('title', this.descritpion);
  $newArticle.append('<section>');
  return $newArticle;
};

portfolioData.forEach(function(portfolioObject) {
  portfolios.push(new Portfolio(portfolioObject));
});

portfolioData.forEach(function(portfolio){
  $('.portfolio').append(portfolio.toHtml());
});
;
