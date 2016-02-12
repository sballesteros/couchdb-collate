var pouchCollate = require('pouchdb-collate');

exports.collate = function(list) {
  return pouchCollate.toIndexableString(list).replace(/\u0000/g, '\u0001');
};

exports.uncollate = function(str) {
  return pouchCollate.parseIndexableString(str.replace(/\u0001/g, '\u0000'));
};
