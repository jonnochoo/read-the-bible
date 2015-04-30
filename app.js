var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var indexRoute = require('./routes/index.js');
var favicon = require('express-favicon');

var port = process.env.PORT || 5000;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use('/', indexRoute);
app.use(function(err, req, res, next) {
  res.status(500).send('Oh no! Something went wrong.');
});

app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
