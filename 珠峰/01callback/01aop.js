/*
Function.prototype.before = function(callback){
    let self = this;
    return function(){
        callback();
        self();
    }
};
function fn(){
    console.log("一定功能")
}
let  newFn = fn.before(()=>{
    console.log("这个是一个参数")
});
newFn();*/
/*Function.prototype.before = function(callback){
    let selt = this;
    return function(){
        callback();
        selt.apply(selt,arguments)
    }
}
function fn(val){
    console.log("这个是函数"+val)
}

let newFn = fn.before(function () {
    console.log("这个是之前调用的")
});
newFn("这个是第一");*/
/*Function.prototype.before = function (callback) {
    let self = this;
return function(){
    callback();
    self.apply(self,arguments)
}
};
function fn(val){
    console.log("这个是函数"+val);
}

let newFn = fn.before(function () {
    console.log("这个是函数之前执行")
});
newFn("这个是");*/
