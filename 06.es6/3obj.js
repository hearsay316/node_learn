let name = 'zlq';
let age = '27';
let obj = {name,age};
console.log(obj);

let obj1 = {age:1,
getfoot(){
    return '面包';
}
};
console.log(obj1);
let obj2 = {age:2};
let obj3 = {
    __proto__ : obj1,
    getname(){
        return 'as'+super.getfoot();
    }
};
//Object.setPrototypeOf(obj3,obj1);

console.log(obj3.getname());
