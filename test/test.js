var assert = require('assert');
var couchdbCollate = require('../');

describe('couchdb-collate', function() {
  it('should round trip', function() {

    var input = ['a', 1];
    var a = couchdbCollate.collate(input);
    var b = couchdbCollate.uncollate(a);
    assert.deepEqual(input, b);
  });
});
