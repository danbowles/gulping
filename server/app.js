var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

app.use(express.static('./public'));

app.get('/', function(req, res) {
  var options = {
    root: path.join(__dirname + '/../public/')
  };

  res.sendFile('index.html', options);
});

app.listen(3000);