function sum(arr) {
  return  arr.reduce(function (val,item,index,arr) {
        let sum = val+=item;
        console.log(arr.length);
        if(index==arr.length-1){
            return sum/arr.length;
        }else {
            return sum
        }
    })

}
let arr=  [1,2,3,6];

//console.log(sum(arr));
let arr2 = [[1,2],[3,4],[5,6]];
arr2.reduce((a,b)=>{
    console.log(a,b);
    return a.concat(b);
})