function Observer() {
    this.state = "不开心";
    this.arr = [];
}
Observer.prototype.attach = function(s){
    this.arr.push(s)
};
Observer.prototype.setState = function (newSate) {
    this.state = newSate;
    this.arr.forEach(fn=>fn.update(this.state ))
};
function Subject(name,target) {
    this.name = name;
    this.target = target;
}
Subject.prototype.update = function(newState){
    console.log(this.name+"监控到了宝宝的状态:"+newState)
};

let o = new Observer();
let s = new Subject("我",o);
let s2 = new Subject("我媳妇",o);
o.attach(s);
o.attach(s2);
o.setState("开心")
o.setState("不开心")
