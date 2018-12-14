let fs = require('fs')
let EventEmitter = require("events");
let util  = require('util');
util.inherits(LineReader,EventEmitter);
const RETURN = 0x0D; // /r
const NEW_LINE = 0X0A;// /n
function LineReader(path,encoding) {
    EventEmitter.call(this);
    this._reader = fs.createReadStream(path);
    this.encoding = encoding||'utf8';
    // 当给一个对象添加新的监听函数时候会发出newListener
    this.on('newListener',function (type,listener) {
        if(type == 'newLine'){
            // 当我们监听那个了液体个可读流readablede的事件
            let buffers = [];
            this._reader.on('readable',()=>{
                let char ;
                while (null!=(char = this._reader.read(1))) {
                    switch (char[0]) {
                        case RETURN:
                            this.emit('newLine',Buffer.from(buffers))
                            buffers.length = 0;
                            let nByte = this._reader.read(1);
                            if (nByte &&nByte[0] != this.NEW_LINE) {
                                buffers.push(nByte[0]);
                            }
                            break;
                        case NEW_LINE:
                            this.emit('newLine',Buffer.from(buffers))
                            buffers.length = 0;
                            break;
                        default:
                            buffers.push(char[0]);
                            break;
                    }
                }
            });
            this._reader.on('end',function () {
                // this.emit('newLine',Buffer.from(buffers).toString(this.encoding));
                // console.log(buffers.toString());
                // this.emit('end');
                if (buffers.length > 0) {
                    this.emit('newLine', Buffer.from(buffers));
                    buffers.length = 0;
                    this.emit('end');
                }
            })

        }
    })

}

module.exports = LineReader;