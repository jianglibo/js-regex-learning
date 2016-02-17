var assert = require('assert');


describe('exec', function() {
  it("should find 1.", function() {
    var re = new RegExp("\\w+", "g");
    var myArray = re.exec("a b c");
    assert.equal(1, myArray.length);
    assert.equal("a", myArray[0]);
  });

  it("should find 3.", function() {
    var re = new RegExp("\\w+", "g");
    var myArray = [];
    var result;
    do {
      result = re.exec("a b c");
      if (result) myArray.push(result);
    } while (result);

    assert.equal(3, myArray.length);
    assert.equal("a", myArray[0][0]);
    assert.equal("b", myArray[1][0]);
    assert.equal("c", myArray[2][0]);
  });
});
