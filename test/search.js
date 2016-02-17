var assert = require('assert');


describe('Search', function() {
  it("should not found.", function() {
    var str = " ";
    var re = /\w/;

    var result = str.search(re);
    assert.equal(-1, result);

  });

  it("should found.", function() {
    var str = "abc";
    var re = /\w/;

    assert.equal(0, str.search(re));

    for (var i = 0; i < 10; i++) { //only test existance.
      assert.equal(0, str.search(re));
    }

  });
});
