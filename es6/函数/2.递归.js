function fab(n) {
    console.log("这个是一个递归"+n);
    if(n===0)return 0;
    if(n>=3){
        return fab(n-1)+fab(n-2)
    }else {
        return 1;
    }
}

console.log(fab(5));

function fib(n) {
    const fib_n = function (curr, next, n) {
        if (n === 0) {
            return curr;
        } else {
            return fib_n(next, curr + next, n - 1);
        }
    };
    return fib_n(0, 1, n);
}

console.log((fib(1)));