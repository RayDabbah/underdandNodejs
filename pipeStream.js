const fs = require('fs');

var readable = fs.createReadStream(__dirname + '/dummy.txt');
var writable = fs.createWriteStream(__dirname + '/copydummy2.txt');

readable.pipe(writable);