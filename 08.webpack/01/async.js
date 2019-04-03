async function async0() {
    console.log(1);
    async1();
    console.log(2);
    return  3;
}
async function async1() {
  await  console.log(4);
}

setTimeout(() => {
    console.log(5);
}, 0);

console.log(async0());
new Promise((resolve, reject) => {
    console.log(6);
    resolve();
    console.log(7);
}).then(() => {
    console.log(8);
});
console.log(9);
