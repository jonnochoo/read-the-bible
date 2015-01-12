var verseQueryParser = require('../lib/verseQueryParser');

describe("VerseQueryParser", function() {

  it("expects parse('nothing') to return null", function() {

    var actual = verseQueryParser.parse("nothing");
    expect(actual).toBe(null);

  });

  it("expects parse('genesis 1') to return 'Genesis 1'", function() {

    var actual = verseQueryParser.parse("genesis 1");
    expect(actual).toEqual({
      book: "Genesis", chapter: "1", verse: null
    });

  });

  it("expects parse('GENESIS+1 ') to return 'Genesis 1'", function() {

    var actual = verseQueryParser.parse("GENESIS+1 ");
    expect(actual).toEqual({
      book: "Genesis", chapter: "1", verse: null
    });

  });

  it("expects parse('genesis 51') to return error", function() {

    expect(function() {
      verseQueryParser.parse("genesis 51")
    })
      .toThrow(new Error("Invalid bible verse"));

  });

  it("expects parse('genesis -1') to return error", function() {

    expect(function() {
      verseQueryParser.parse("genesis -1")
    })
      .toThrow(new Error("Invalid bible verse"));

  });

  it("expects parse('1 Peter:2') to return '1 Peter 1:2'", function() {

    var actual = verseQueryParser.parse("1 Peter 1:2");
    expect(actual).toEqual({
      book: "1 Peter", chapter: "1", verse: "2"
    });

  });

    it("expects parse('1+Peter:2') to return '1 Peter 1'", function() {

    var actual = verseQueryParser.parse("1+Peter 1:2");
    expect(actual).toEqual({
      book: "1 Peter", chapter: "1", verse: "2"
    });

  });

  it("expects parse('2 corinthians 2:1-4') to return '2 Corinthians 2:1-4'", function() {

    var actual = verseQueryParser.parse("2 corinthians 2:1-4");
    expect(actual).toEqual({
      book: "2 Corinthians", chapter: "2", verse: "1-4"
    });

  });

});