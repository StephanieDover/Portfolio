'use strict';

function Portfolio(portfolioData) {
  this.title = portfolioData.title;
  this.imageURL = portfolioData.siteImageUrl;
  this.siteURL = portfolioData.siteURL;
  this.description = portfolioData.about;
}

Portfolio.prototype.toHtml = function() {
  let template = Handlebars.compile($('#portfolio-template').text());
  // console.log(template(this));
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
}
