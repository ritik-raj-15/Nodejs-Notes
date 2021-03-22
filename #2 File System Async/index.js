const fs = require('fs');

//  fs.writeFile('read.txt',"Hello world, Async file creation ",(err)=>{console.log('file created');console.log(err);});
// we pass a function as an argument which is called callback function
// that gets called when that particular task is completed.
/* The callback has an argument that tells you wether the operation is
   completed successfully or not.
*/

//fs.appendFile('read.txt',"Adding more data in this file. have a great day",(err)=>{console.log("data added");})

// fs.readFile('read.txt','UTF-8',(err,data)=>{
// console.log(data);
// });