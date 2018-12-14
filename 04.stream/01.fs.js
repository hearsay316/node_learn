let fs = require('fs');
let readStrem = fs.createReadStream('./1.txt', {
    highWaterMark: 3
});
readStrem.on('readable', function () {
    let ch = readStrem.read(1);
    console.log(ch.toString());
    setTimeout(() => {
        console.log(readStrem._readableState.length);
    }, 200)

    // console.log(`读取的数据: ${readStrem.read()}`);
})
readStrem.on('end', () => {
    console.log('end');
})

class hhh {

}