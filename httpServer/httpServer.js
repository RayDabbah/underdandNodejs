const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-type": 'text/html' })
    var message = 'This is without any templating engine or express!';
    var html = fs.createReadStream(__dirname + '/httpServer.htm', 'utf8').pipe(res)
    // html = html.replace('{Message}', message)
    // res.end(html)
}).listen(1234, 'localhost', console.log('Server is listening on port 1234'))