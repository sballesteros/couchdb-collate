# couchdb-collate

[pouchdb-collate](https://github.com/pouchdb/collate) but with a dirty
fix for a
[bug in how Chrome parses URLs](https://code.google.com/p/chromium/issues/detail?id=356924)
which causes problems in the replicator when it tries to GET docs at
those URLs.
