const fs = require('fs');
const zlib = require('zlib')
var readable = fs.createReadStream(__dirname + '/dummy.txt');
var writable = fs.createWriteStream(__dirname + '/copydummy2.txt');
var compressed = fs.createWriteStream(__dirname + '/gzDummy.txt.gz')
readable.pipe(writable);

readable.pipe(zlib.createGzip()).pipe(compressed);

