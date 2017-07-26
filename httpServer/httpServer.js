const http = require('http')
const fs = require('fs')
var html = fs.readFileSync(__dirname + '/httpServer.htm', 'utf8')
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-type": 'text/html' })
    var message = 'This is without any templating engine or express!';
    html = html.replace('{Message}', message)
    res.end(html)
}).listen(1234, 'localhost', console.log('Server is listening on port 1234'))