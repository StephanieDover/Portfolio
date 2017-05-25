'use strict';

var app = app || {};

function Portfolio(portfolioData) {
  this.title = portfolioData.title;
  this.imageURL = portfolioData.siteImageUrl;
  this.siteURL = portfolioData.siteURL;
  this.description = portfolioData.about;
}

(function(module){Portfolio.prototype.toHtml = function() {
  let template = Handlebars.compile($('#portfolio-template').text());
  return template(this);
};

  const loadPage = function (data) {
    data.forEach((portfolio) => {
      let inst = (new Portfolio(portfolio));
      $('.portfolio').append(inst.toHtml());
      console.log(inst);
    });
  }

  Portfolio.fetchAll = function() {
    let data;
    if (localStorage.getItem('portfolioData')) {
      data = JSON.parse(localStorage.portfolioData);
    } else {
      console.log('else');
      $.getJSON('data/blog.json', (result) => {
        data = result
        console.log(data);
        localStorage.portfolioData = JSON.stringify(data);
      })
    }
    loadPage(data);
    module.Protfolio = Portfolio;
  }
})(app)

function name(names) {
  names = [['s'],['t'],['e'],['p'],['h'],['a'],['n'],['i'],['e'],[' '],['d'],['o'],['v'],['e'],['r']].reduce((acc,cur) => acc.concat(cur), []).join('').toUpperCase();
  return names
}
$('#name').text(name());
