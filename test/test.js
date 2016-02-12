var assert = require('assert');
var couchdbCollate = require('../');

describe('couchdb-collate', function() {
  it('should round trip', function() {

    var input = ['a', 1];
    var a = couchdbCollate.toIndexableString(input);
    var b = couchdbCollate.parseIndexableString(a);
    assert.deepEqual(input, b);
  });
});
