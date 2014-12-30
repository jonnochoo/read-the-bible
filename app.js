var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var indexRoute = require('./routes/index.js');

var port = process.env.PORT || 5000;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);

app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
