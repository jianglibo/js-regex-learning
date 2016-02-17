var assert = require('assert');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

describe('replace', function() {
  it("should work.", function() {
    var re = /apples/gi;
    var str = 'Apples are round, and apples are juicy.';
    var newstr = str.replace(re, 'oranges');
    assert.equal("oranges are round, and oranges are juicy.", newstr);
  });

  it("should work when function.", function() {
    var re = /apples/gi;
    var str = 'Apples are round, and apples are juicy.';

    function replacer(match, p1, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return match;
    }

    var newstr = str.replace(re, replacer);
    assert.equal("oranges are round, and oranges are juicy.", newstr);
  });
});
