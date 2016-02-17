var assert = require('assert');


describe('Capturing parentheses', function() {
  it("should be equal.", function() {
    var myString = 'Hello 1 word. Sentence number 2.';
    var splits = myString.split(/(\d)/);

    assert.equal(5, splits.length);
    assert.equal('string', typeof splits[0]);

    var strs = [];
    var separators = [];

    splits.forEach(function(it, idx){
      if (idx % 2 === 0) {
        strs.push(it);
      } else {
        separators.push(it);
      }
    });

    assert.equal(3, strs.length);
    assert.equal(2, separators.length);
  });
});
