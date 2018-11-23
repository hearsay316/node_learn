let fs = require('fs');
let EventEmitter = require('events');
class WriteStream extends EventEmitter{
    constructor(path,options){
        super(path,options);
        this.flags = options.flags||'w';
        this.mode = options.mode||0o666;
        this.start = options.start||0;
        this.pos = this.start;
        this.encoding = options.encoding||'utf8';
        this.autoClose = options.autoClose||true;
        this.highWaterMark = options.highWaterMark||16*1024;
        this.buffers = [];
        this.length = 0;
        this.writing = false;
        this.open()
    }
    open(){
        fs.open(this.path,this.flags,this.mode,(err,fd)=>{
            if(err)return this.destroy();
            this.emit('error',err);
            this.fd = fd;
        })
    }
    write(chunk,encoding,cb){
        if(this.writing){
            chunk = Buffer.isBuffer(chunk)?chunk:buffer.from(chunk,this.encoding)
            this.buffers.push({
                chunk,encoding,cb
            })
            let len = chunk.length;
            this.length += len;
            let ret = this.length<this.highWaterMark;
            return ret;
        }else {
            this.writing = true;
            thsi._write(chunk,cncoding,()=>this.clearBuffer())
        }
    }
    _write(){

    }
    destroy(){
        fs.close(this.fd,()=>{
            thsi.emit('close')
        })
    }
}