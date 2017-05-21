'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser').urlencoded({extended: true});

const app = express();

app.use(express.static('./public'))

//COMMENT: remove dead code.
// app.get('/', function(request, response) {
//   response.sendFile('/public/new.html', {root: '.'});
// });

app.post('/index', bodyParser, function(request, response) {

  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {
  //COMMENT: This threw me off when I ran nodemon. I'm assuming it is reused code.
  console.log('Lab 7 is on port 3000');
});
