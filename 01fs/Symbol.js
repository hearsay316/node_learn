let mysymbol = Symbol('123');
console.log(typeof mysymbol);
let text = mysymbol;
console.log(text);
console.log(text===mysymbol);
text = '123';
console.log(mysymbol.toStringTag);
console.log(text);
console.log(text === mysymbol);