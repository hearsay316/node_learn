let fs = require('fs');
let rs = fs.createReadStream('./1.txt', {
    highWaterMark: 3,
    flags: 'r',
    mode: 0o666,
    start: 3,
    end: 3
});
// 创建它的data事件,当你一旦开始
rs.on('data', function (data) {
    console.log(data.toString());
});
rs.on('end', function () {
    console.log('读完了');
});
rs.on('error', function () {
    console.log('error事件');
});
rs.on('close', function () {
    console.log('文件关闭');
});