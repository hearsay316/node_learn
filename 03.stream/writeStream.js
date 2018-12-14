let fs = require('fs');
let ws = fs.createWriteStream('./1.txt');
// console.log(ws);
// ws .wrwsite() 写  ws.end() 完成
ws.write("1",function () {
    console.log(2);
})
ws.write("1")
ws.write("1")
ws.write("1");
ws.on('drain',function () {
    console.log('吃饭了');
})
// ws.end('吃饱了');

