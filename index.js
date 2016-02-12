var pouchCollate = require('pouchdb-collate');

exports.toIndexableString = function(list) {
  return pouchCollate.toIndexableString(list).replace(/\u0000/g, '\u0001');
};

exports.parseIndexableString = function(str) {
  return pouchCollate.parseIndexableString(str.replace(/\u0001/g, '\u0000'));
};
