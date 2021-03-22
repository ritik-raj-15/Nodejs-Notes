const fs = require('fs');
//1.) Created a folder/Directory
// fs.mkdirSync('Challenge');

// 2.) Create a file in Challenge Dir
//fs.writeFileSync('Challenge/Demo.txt',"Adding data here");

//3.) Appending more data into it;
//fs.appendFileSync('Challenge/Demo.txt'," Appending more data");

//4.) Printing data without Buffer
// this can be achieve by file encoding method;
// encoding decodes the buffer file into human readable format;
//const data = fs.readFileSync('Challenge/Demo.txt','utf-8');
//console.log(data);

//5.) Renaming the file
//fs.renameSync('Challenge/Demo.txt','Challenge/Text.txt');

//6.) Deleting file inside Challenge folder use unlinkSync;
//fs.unlinkSync('Challenge/Text.txt');
 
//7.) Delete whole Directory
//fs.rmdirSync('Challenge');