var chapterFinder = require('../lib/chapterFinder');

describe("ChapterFinder", function() {

  // getNextChapter
  it("expects getNextChapter('Genesis', 1) to return 'Genesis 2'", function() {

    var actual = chapterFinder.getNextChapter("Genesis", 1);
    expect(actual.book).toBe("Genesis");
    expect(actual.chapter).toBe(2);
    
  });

  it("expects getNextChapter('Genesis', 50) to return 'Exodus 1'", function() {

    var actual = chapterFinder.getNextChapter("Genesis", 50);
    expect(actual.book).toBe("Exodus");
    expect(actual.chapter).toBe(1);
    
  });

  it("expects getNextChapter('Malachi', 4) to return 'Matthew 1'", function() {

    var actual = chapterFinder.getNextChapter("Malachi", 4);
    expect(actual.book).toBe("Matthew");
    expect(actual.chapter).toBe(1);
    
  });

  it("expects getNextChapter('Revelation', 22) to return 'null'", function() {

    var actual = chapterFinder.getNextChapter("Revelation", 22);
    expect(actual).toBe(null);
    
  });

  it("expects getNextChapter('Revelation', 23) to return 'null'", function() {

    var actual = chapterFinder.getNextChapter("Revelation", 23);
    expect(actual).toBe(null);
    
  });

  it("expects getNextChapter(null, 1) to return error", function() {

    expect(function() {
      chapterFinder.getNextChapter(null, 1)
    })
      .toThrow(new Error("could not find the book null"));
    
  });

  // getPreviousChapter
  it("expects getPreviousChapter('Genesis', 1) to return 'null'", function() {

    var actual = chapterFinder.getPreviousChapter("Genesis", 1);
    expect(actual).toBe(null);
    
  });

  it("expects getPreviousChapter('Genesis', 2) to return 'Genesis 1'", function() {

    var actual = chapterFinder.getPreviousChapter("Genesis", 2);
    expect(actual.book).toBe("Genesis");
    expect(actual.chapter).toBe(1);
    
  });

  it("expects getPreviousChapter(null, 1) to return error", function() {

    expect(function() {
      chapterFinder.getPreviousChapter(null, 1)
    })
      .toThrow(new Error("could not find the book null"));
    
  });

});