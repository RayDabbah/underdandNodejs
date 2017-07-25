const fs = require('fs');

var streaming = fs.createReadStream(__dirname + '/dummy.txt',/*  { encoding: 'utf8',  highWaterMark: 7 * 1000 } */)
var writing = fs.createWriteStream(__dirname + '/copydummy.txt')

streaming.on('data', function (ch) {
    // console.log(ch + '\n\n============================================================================\n');
    console.log(ch)
})

streaming.on('data', function (ch) {
    console.log(ch.length)
    writing.write(ch /* + '\n\n\n\n\n\n================================================\n\n\n\nseeing if this works! \n\n\n\n=======================================================================\n\n\n\n\n\n\n\n\n\n\n\n\n\n' */)
    // writing.write(ch + '\n\n\n\n\n\n================================================\n\n\n\nseeing if this works! \n\n\n\n=======================================================================\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
})



