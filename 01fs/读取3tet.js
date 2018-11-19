const fs = require('fs');
fs.readFile('./3.txt',function (err,data) {
    console.log(data.toString());
   if(data[0] ===0xef && data[1]==0xbb && data[2]==0xbf){
       data = data.slice(3)
   }
   console.log(data.toString());
})