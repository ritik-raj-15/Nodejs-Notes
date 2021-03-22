// Every file in the system has a path.
// Getting information out of a path
// Given a path, you can extract information out of it using those methods:
// dirname: get the parent folder of a file
// basename: get the filename part i.e Return the last portion of a path.
// extname: get the file extension
const path = require('path');
console.log(path.dirname('D:/Nodejs/Nodejs Notes/#3 Path Module/path.js'));
// Output:D:/Nodejs/Nodejs Notes/#3 Path Module

console.log(path.basename('D:/Nodejs/Nodejs Notes/#3 Path Module/path.js'));
// Output:path.js

console.log(path.extname('D:/Nodejs/Nodejs Notes/#3 Path Module/path.js'));
// Output:.js

// path.parse()
// Parses a path to an object with the segments that compose of:
// root: the root
// dir: the folder path starting from the root
// base: the file name + extension
// name: the file name
// ext: the file extension

console.log(path.parse('D:/Nodejs/Nodejs Notes/#3 Path Module/path.js'));
// Output:
// {
//     root: 'D:/',
//     dir: 'D:/Nodejs/Nodejs Notes/#3 Path Module',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

