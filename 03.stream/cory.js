let fs = require('fs');


function pipe(source,targe) {
   let rs = fs.createReadStream(source,{highWaterMark:4});
   let ws = fs.createWriteStream(targe,{highWaterMark: 1});
 /*  rs.on('data',function (chunk) {
       if(ws.write(chunk)===false){
           rs.pause();
       }
   })
    ws.on('drain',function () {
        let a = 0;
        a++;
        console.log(a);
        rs.resume();
    })
    rs.on('end',function () {
        ws.end();
    })*/

 rs.pipe(ws)
}
pipe('1.txt','2.txt')