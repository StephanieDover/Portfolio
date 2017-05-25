'use strict';

var app = app || {};



(function(module){
  function Portfolio(portfolioData) {
    this.title = portfolioData.title;
    this.imageURL = portfolioData.siteImageUrl;
    this.siteURL = portfolioData.siteURL;
    this.description = portfolioData.about;
  }

  Portfolio.prototype.toHtml = function() {
    let template = Handlebars.compile($('#portfolio-template').text());
    return template(this);
  };

  const loadPage = function (data) {
    $('.portfolio').empty();
    data.forEach((portfolio) => {
      let inst = (new Portfolio(portfolio));
      $('.portfolio').append(inst.toHtml());
    });
  }

  Portfolio.fetchAll = function() {
    let data;
    if (localStorage.getItem('portfolioData')) {
      data = JSON.parse(localStorage.portfolioData);
      loadPage(data);
    } else {
      $.getJSON('data/blog.json', (result) => {
        data = result
        loadPage(data);
        localStorage.portfolioData = JSON.stringify(data);
      })
    }
  }
  module.Portfolio = Portfolio;
})(app);

function name(names) {
  names = [['s'],['t'],['e'],['p'],['h'],['a'],['n'],['i'],['e'],[' '],['d'],['o'],['v'],['e'],['r']].reduce((acc,cur) => acc.concat(cur), []).join('').toUpperCase();
  return names
}
$('#name').text(name());
