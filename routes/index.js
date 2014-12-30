var request = require('request');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('search');
});

router.post('/', function (req, res) {  
  var uri = '/' + req.body.search.trim().replace(' ', '+');
  res.redirect(uri);
});

router.get('/:verse', function (req, res) {

  var verse = req.params.verse;
  var url = 'http://www.esvapi.org/v2/rest/passageQuery?key=IP&include-audio-link=0&include-first-verse-numbers=0&include-verse-numbers=0&include-headings=0&include-footnotes=0&include-short-copyright=0&passage=' + verse;

  request.get(url, function(err, response, data){
    res.render('verses', { html: data });
  });
    
});

module.exports = router;