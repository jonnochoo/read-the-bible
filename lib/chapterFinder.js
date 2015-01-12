var chapters = require('./chapters.json');
var _ = require('lodash');

function getBookInfo(book) {
  var index = _.findIndex(chapters, { book: book });
  if(index < 0) {
    throw Error("could not find the book " + book);
  }

  var bookInfo = chapters[index]; 
  return {
    book: bookInfo.book,
    numberOfChapters: bookInfo.numberOfChapters,
    index: index
  };
};

function getNextChapter(book, chapter) {  
  var bookInfo = getBookInfo(book);
  if(chapter < bookInfo.numberOfChapters) {
    return {
      book: bookInfo.book,
      chapter: chapter + 1
    }; 
  }

  var nextBookIndex = bookInfo.index + 1;
  if(nextBookIndex < chapters.length) {
    nextBook = chapters[nextBookIndex];
    return {
        book: nextBook.book,
        chapter: 1
      };  
  }

  return null;
};

function getPreviousChapter(book, chapter) {
  var bookInfo = getBookInfo(book);
  if(chapter > 1) {
    return {
      book: bookInfo.book,
      chapter: chapter - 1
    }; 
  }

  var previousBookIndex = bookInfo.index - 1;
  if(previousBookIndex >= 0) {
    previousBook = chapters[previousBookIndex];
    return {
        book: previousBook.book,
        chapter: previousBook.numberOfChapters
      };  
  }

  return null;
};

module.exports = {
  getBookInfo: getBookInfo,
  getNextChapter: getNextChapter,
  getPreviousChapter: getPreviousChapter
}