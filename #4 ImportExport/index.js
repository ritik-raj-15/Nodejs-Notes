
//Method one: without de-constructing;
const obj = require('./export');
console.log(obj);
//Output: { add: [Function: add], sub: [Function: sub], name: 'Node' }
// console.log(obj.add(5,10));
// console.log(obj.sub(10,5));
// console.log(obj.name);


//Method 2: object de-constructing and importing the export module;
// const {add,sub,name}=require('./export');
// console.log(add(5,10));
// console.log(sub(10,5));
// console.log(name);