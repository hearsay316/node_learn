


let LineReader = require('./LineReader')
let reader = new LineReader('./1.txt','utf8');
reader.on('newLine',function (data) {
    console.log(data);
})
reader.on('end',function () {
    console.log('over');
})