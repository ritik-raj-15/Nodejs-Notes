/* 1.) importing file system module for creating a new file in system.
   2.)to import we use require method;
   3.) writeFileSync creates the new file, and if that file already exist in system, it over-rides the data!!
*/

const fs=require('fs');
//creating a new file 
//fs.writeFileSync('read.txt',"Welcome ritik");

//this below line overrides the file;
//fs.writeFileSync('read.txt',"Welcome ritik raj, you are learning nodejs");

// if you want to add data without overriding use appendFileSync;
//fs.appendFileSync('read.txt'," Adding Extra text!");

const data=fs.readFileSync('read.txt');
//console.log(data);
/*Output :<Buffer 57 65 6c 63 6f 6d 65 20 72 69 74 69 6b 20 72 61 6a 2c 20 79 6f 75 20 61 72 65 20 6c 65 61 72 6e 69 6e 67 20 6e 6f 64 65 6a 73 20 41 64 64 69 6e 67 20 ... 11 more bytes> 
-Notice that the node bydefault gives the data in buffer type,
-Node.js includes an additional data type called Buffer
-buffer is mainly used to store binary data,
-while reading from a file or receiving packets over the network
-so to have actuall data use toString() method
*/
console.log(data.toString());
// Output:- Welcome ritik raj, you are learning nodejs Adding Extra text!

// to rename a file 
fs.renameSync('read.txt','readwrite.txt');