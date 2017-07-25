const fs = require('fs');

var jobReq = fs.readFileSync(__dirname + '/fsSync.txt', 'utf8')
console.log(jobReq)
var jobReq = fs.readFile(__dirname + '/fs.txt', 'utf8',
    function (err, data) {
        console.log(data)
    })
console.log(`

================================================

Almost done because I'm sync and readFile isn't!

================================================
`)