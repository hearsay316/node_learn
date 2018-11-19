let fs = require('fs');
let path = require('path')
/*
* 异步的
*
* */
function preDeep(dir,callback) {
    console.log(dir);
    fs.readdir(dir,function (err,files) {
        !function next(i) {
            if(i>=files.length) return callback();
            let child = path.join(dir,files[i]);
            fs.stat(child,(err,stat)=>{
                if(stat.isDirectory()){
                    preDeep(child,()=>{
                        next(i+1)
                    });
                }else {
                    console.log(child);
                    next(i+1)
                }
            })
        }(0)
    })
}
preDeep('a',()=>{
    console.log('全部完成');
})