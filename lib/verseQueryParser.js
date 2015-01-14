var chapterFinder = require('../lib/chapterFinder');

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function parse(text) {
  var regex = /(Genesis)|(Exodus)|(Leviticus)|(Numbers)|(Deuteronomy)|(Joshua)|(Judges)|(Ruth)|(1 Samuel)|(2 Samuel)|(1 Kings)|(2 Kings)|(1 Chronicles)|(2 Chronicles)|(Ezra)|(Nehemiah)|(Esther)|(Job)|(Psalms)|(Proverbs)|(Ecclesiastes)|(Song of Songs)|(Isaiah)|(Jeremiah)|(Lamentations)|(Ezekiel)|(Daniel)|(Hosea)|(Joel)|(Amos)|(Obadiah)|(Jonah)|(Micah)|(Nahum)|(Habakkuk)|(Zephaniah)|(Haggai)|(Zechariah)|(Malachi)|(Matthew)|(Mark)|(Luke)|(John)|(Acts)|(Romans)|(1 Corinthians)|(2 Corinthians)|(Galatians)|(Ephesians)|(Philippians)|(Colossians)|(1 Thessalonians)|(2 Thessalonians)|(1 Timothy)|(2 Timothy)|(Titus)|(Philemon)|(Hebrews)|(James)|(1 Peter)|(2 Peter)|(1 John)|(2 John)|(3 John)|(Jude)|(Revelation)/;
  text = text.replace("+", " ");
  text = toTitleCase(text);
  
  var bookRegex = regex.exec(text);
  if(!bookRegex){
    return null;
  }

  var bookName = bookRegex[bookRegex.index];
  var bookInfo = chapterFinder.getBookInfo(bookName);

  var chapterVerse = text.replace(bookName, "").trim();
  var chapterVerseArray = chapterVerse.split(':');

  if(chapterVerseArray.length == 1 || chapterVerseArray.length == 2) {
    var chapter = chapterVerseArray[0];
    if(chapter >= 1 && chapter <= bookInfo.numberOfChapters) {
      return {
        book: bookName,
        chapter: chapter,
        verse: chapterVerseArray.length == 2 ? chapterVerseArray[1] : null
      }; 
    }
  }

  throw new Error("Invalid bible verse");
}

module.exports = {
  parse: parse
};