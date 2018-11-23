let http = require('http');
let port = 3000;
http.createServer(function (req,res) {
// req
    res.setHeader('Content-Type','text/plain;charset=utf8')
    res.write('中文');
    res.end();
}).listen(port,function () {
    console.log('端口'+port);
})