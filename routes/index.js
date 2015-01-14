var request = require('request');
var express = require('express');
var verseQueryParser = require('../lib/verseQueryParser');
var chapterFinder = require('../lib/chapterFinder');

var router = express.Router();

router.get('/', function (req, res) {
  res.render('search');
});

router.post('/', function (req, res) {  
  var info = verseQueryParser.parse(req.body.search.trim());
  var uri = '/' + info.book.replace(' ', '+') + '+' + info.chapter + (info.verse ? (':' + info.verse) : '' );  
  res.redirect(uri);
});

router.get('/:verse', function (req, res) {
  var verse = req.params.verse;
  var verseInfo = verseQueryParser.parse(verse);
  var chapter = parseInt(verseInfo.chapter);
  var nextChapter = chapterFinder.getNextChapter(verseInfo.book, chapter);
  var nextChapterUri = nextChapter.book.replace(' ', '+') + '+' + nextChapter.chapter;
  var previousChapter = chapterFinder.getPreviousChapter(verseInfo.book, chapter);
  var previousChapterUri = previousChapter.book.replace(' ', '+') + '+' + previousChapter.chapter;

  var url = 'http://www.esvapi.org/v2/rest/passageQuery?key=IP&include-audio-link=0&include-first-verse-numbers=0&include-verse-numbers=0&include-headings=0&include-footnotes=0&include-short-copyright=0&passage=' + verse;

  request.get(url, function(err, response, data){
    res.render('verses', { html: data, nextChapterUri: nextChapterUri, previousChapterUri: previousChapterUri });
  });
});

module.exports = router;