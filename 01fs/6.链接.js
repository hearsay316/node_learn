let fs = require('fs');
let path = require('path');
console.log(path.join('a','b'));
console.log(__filename);
console.log(path.resolve('..','../..','a'));
//path.delimiter;
console.log(path.delimiter);
console.log(path.sep==='\\');