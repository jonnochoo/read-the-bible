var express = require('express');
var request = require('request');
var path = require('path');

var port = process.env.PORT || 5000;

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('OK');
});

app.get('/:verse', function (req, res) {

	var verse = req.params.verse;
	var url = 'http://www.esvapi.org/v2/rest/passageQuery?key=IP&include-audio-link=0&include-first-verse-numbers=0&include-verse-numbers=0&include-headings=0&include-footnotes=0&include-short-copyright=0&passage=' + verse;

	request.get(url, function(err, response, data){
		res.render('index', { html: data });
	});
    
});

app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
