var assert = require('assert');


describe('Two type', function() {
  it("should be equal.", function() {
    var re = /\w+/;
    var re1 = new RegExp('\\w+');
  });
});

describe('new line', function() {
  it("should work.", function() {
    var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
    var lines = text.split(/\r\n|\r|\n/);
    assert.equal(4, lines.length);
  });
});
