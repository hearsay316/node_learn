let fs = require('fs')
let EventEmitter = require("events");
let util  = require('util');
util.inherits(LineReader,EventEmitter);
const NEW_LINE = 0X0A;// /n
const RETURN = 0x0D; // /r
function LineReader(path,encoding) {
    EventEmitter.call(this);
    this._reader = fs.createReadStream(path);
    this.encoding = encoding||'utf8';
    // 当给一个对象添加新的监听函数时候会发出newListener
    this.on('newListener',function (type,listener) {
        if(type =='newLine'){
            // 当我们监听那个了液体个可读流readablede的事件
            let buffers = [];
            this._reader.on('readable',()=>{
                let char ;
                while (null!=(char = this._reader.read(1))) {
                    switch (char[0]) {
                        case NEW_LINE:
                            this.emit('newLine',Buffer.from(buffers).toString(this.encoding))
                            buffers.length = 0;
                            break;
                        case RETURN:
                            this.emit('newLine',Buffer.from(buffers).toString(this.encoding))
                            buffers.length = 0;
                            let nChar = this._reader.read(1);
                            if(nChar[0] != NEW_LINE){
                                buffers.push(nChar[0])
                            }
                            break;
                        default:
                            buffers.push(char[0]);
                            break;
                    }
                }
            });
            this._reader.on('end', () =>{
                this.emit('newLine',Buffer.from(buffers).toString(this.encoding));
                // console.log(buffers.toString());
                // this.emit('end');
                //     this.emit('newLine', Buffer.from(buffers));
                    this.emit('end');

            })

        }
    })

}
// function LineReader(path) {
//     EventEmitter.call(this);
//     this._rs = fs.createReadStream(path);
//     this.RETURN = 0x0D;// \r 13
//     this.NEW_LINE = 0x0A;// \n 10
//     this.on('newListener', function (type, listener) {
//         if (type == 'newLine') {
//             let buffer = [];
//             this._rs.on('readable', () => {
//                 let bytes;
//                 while (null != (bytes = this._rs.read(1))) {
//                     let ch = bytes[0];
//                     switch (ch) {
//                         case this.RETURN:
//                             this.emit('newLine', Buffer.from(buffer));
//                             buffer.length = 0;
//                             let nByte = this._rs.read(1);
//                             if (nByte && nByte[0] != this.NEW_LINE) {
//                                 buffer.push(nByte[0]);
//                             }
//                             break;
//                         case this.NEW_LINE:
//                             this.emit('newLine', Buffer.from(buffer));
//                             buffer.length = 0;
//                             break;
//                         default:
//                             buffer.push(bytes[0]);
//                             break;
//                     }
//                 }
//             });
//             this._rs.on('end', () => {
//                 if (buffer.length > 0) {
//                     this.emit('newLine', Buffer.from(buffer));
//                     buffer.length = 0;
//                     this.emit('end');
//                 }
//             })
//         }
//     });
// }
module.exports = LineReader;