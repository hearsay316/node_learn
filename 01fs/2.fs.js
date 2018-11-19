let str  =  '珠峰';
let fs  = require('fs');
fs.open('./1.txt','w',0o666,(err,fd)=>{
    let buff = Buffer.from(str);
    fs.write(fd,buff,0,3,null,(err,bytesWritten)=>{
        console.log(bytesWritten);
        fs.write(fd,buff,3,3,null,(err,byeesWritten)=>{
            console.log(byeesWritten);
            fs.fsync(fd,()=>{
                fs.close(fd,()=>{
                    console.log('关闭文件完成');
                })
            })
        })
    })
})