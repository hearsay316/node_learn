function get() {
    return [1,2,3]
}
let a = get();
a.push(4);
let b = get();
console.log(a,b);