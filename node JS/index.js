var http = require('http')

http.createServer(function(req, res){
    res.end("hello, Nodemon")
}).listen(5000)