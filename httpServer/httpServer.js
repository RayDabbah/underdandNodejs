const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { "Content-type": 'text/html' })
        var html = fs.createReadStream(__dirname + '/httpServer.htm', 'utf8').pipe(res)
    }
    else if (req.url === '/template') {
        res.writeHead(200, { "Content-type": 'text/html' })
        var message = 'This is without any templating engine or express!';
        var html = fs.readFileSync(__dirname + '/httpServer.htm', 'utf8')
        html = html.replace('{Message}', message)
        res.end(html)
    }
    else if(req.url ==='/api'){
         res.writeHead(200, { "Content-type": 'application/json' })
        var obj = {
            first: 'Avrum Shmerel',
            last: 'Chaim Yankel'
        }
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404)
        res.end('Sorry bad day today! Hopefully better tomorrow!')
    }
    
}).listen(1234, 'localhost', console.log('Server is listening on port 1234'))