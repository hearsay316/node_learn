// function username(name) {
//     let user = name;
//     this.getUsername = function () {
//         return user;
//     }
// }
// let user = new  username('hearsay');
// console.log(user.getUsername());
function a() {
    this.name = "hearsay"
    return {
        username:456
    }
}console.log(a());console.log(a.name);
let b = new a();
console.log(b);console.log(b.name);
console.log(name);
