const fs = require('fs');
// fs.readFile('./1.txt',{encoding:'utf8',flag:'r'},function (err,data) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// })
// const buf = new Buffer('这个是');
// console.log(buf.toString());
// fs.writeFile('./2.txt','data',{encoding:'utf8',mode:'0x666',flag:'r+'},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else {
//        console.log('成功'+data);
//     }
// })
fs.open('./1.txt','r',0o666,(err,fd)=>{
    console.log(fd);
    let buff = Buffer.alloc(4);
    fs.read(fd,buff,0,3,1,function (err,bytesRead,buffer) {
        console.log(buff.toString(),111);
        fs.read(fd,buff,3,3,1,function (err,bytesRead,buffer) {
            console.log(buff.toString());
        })
    })
})