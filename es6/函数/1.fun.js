// 1 函数
function ajax(url=new Error('url不能为空'),method='GET',dataType='json') {
    console.log(url);
    console.log(method);
    console.log(dataType);
}
//ajax();

let arr = [1,2,4,5,6];
let bb = [...arr];
arr.push(7);
// console.log(arr,bb);

//2 数组求和

let app = function sum(prefix,...rest) {
    let result = 0;
    // 数组求和
   /*  rest.forEach((item)=>result+=item)
    console.log(result);*/
   // 2
   //  rest.reduce((val,item,index,arr)=>{
   //      console.log(val,-1);
   //      console.log(item,0);
   //      console.log(index,1);
   //      console.log(arr,2);
   //      return 1
   //  })
}
// console.log(app.name);
// let a = 'zfpx';
//
// //console.log(a.includes('x',1));
// console.log(a.endsWith('f',2));
let a= 'aars';
console.log(a.repeat(2),a
);

console.log([1,2,3,4,5,6].copyWithin(2,1));