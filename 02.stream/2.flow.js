let fs = require('fs');
let rs = fs.createReadStream("./1.txt",{
    highWaterMark:3
});

rs.on('readable',()=>{

    console.log(rs._readableState.length,0);
   let ch =  rs.read(1);
    console.log(rs._readableState.length,1);
    ch =  rs.read(1);
    console.log(rs._readableState.length,2);
     setTimeout(function () {
         console.log(rs._readableState.length,3);
     },200)
})