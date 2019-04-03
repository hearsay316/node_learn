function* f() {
    yield "aaa";
    yield "222"
    return 'sss';
    yield "222"
}
let arr = [];

// for(let a of f()){
//   //  console.log(a);
// }
let a  = f();
let b= a.next();
while (!b.done) {
    console.log(b.value)
    b= a.next();
}
// while (f().next())