let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url')
http.createServer( (req,res)=> {
// req
//     res.setHeader('Content-Type','text/plain;charset=utf8')
 /*   fs.readFile('index.html','utf8', (err, data)=> {
        res.end(data);
    })*/
 let urlObj = url.parse(req.url,true );
 console.log(urlObj);
 fs.createReadStream('index.html').pipe(res);
}).listen(port,function () {
    console.log('端口'+port);
})