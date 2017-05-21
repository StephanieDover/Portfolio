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

//I stiil had hackerIpsom stored at localStorage.rawData on my machine. It showed up in place of your projects until I cleared localStorage. It was super weird. So maybe name it somehting else like blogData? I don't know. It seems like more of a problem on my end than yours.
Portfolio.fetchAll = function() {
  let data;
  if (localStorage.getItem('rawData')) {
    data = JSON.parse(localStorage.rawData);
  } else {
    console.log('else');
    $.getJSON('data/blog.json', (result) => {
      data = result
      console.log(data);
      localStorage.rawData = JSON.stringify(data);
    })
  }
  loadPage(data);
}
