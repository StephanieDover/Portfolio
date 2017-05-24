'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser').urlencoded({extended: true});

const app = express();

app.use(express.static('./public'))

app.post('/index', bodyParser, function(request, response) {

  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function() {

  console.log(`Portfolio is on port ${PORT}`);
});
