const fs = require('fs');
let path = require('path');

fs.readdir('./a',function (err,files) {

        files.forEach((file)=>{
            let child = path.join('a',file);
        fs.stat(child,function (err,stat) {
            console.log(stat);

        })



})})