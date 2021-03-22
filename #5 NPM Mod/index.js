// Initialize npm init before using it in project
// command: npm init
//after initializing npm, a new package.json will be created inside the project folder.
//----------------------------------------------------------------------------------------------------------------------------
// What is package.json?
// package.json is a plain JSON(Java Script Object Notation) text file which contains all metadata information about Node JS Project or application.
// Every Node JS Package or Module should have this file at root directory to describe its metadata in plain JSON Object format.
// In NPM (Node Package Manager), package.json contains all the information about dependencies,packages, library used by a user in its project;

// After installing any npm package a package-lock.json is created
//The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible
// in the same way even if packages are updated by their maintainers.
const chalk = require('chalk');
console.log(chalk.red.inverse('False'));
console.log(chalk.green.inverse('True'));
// here i have used a simple module package of chalk 
//whose use is to make Terminal string output stylish
 const validator = require('validator');
 const email="xyz@gmail.com";
 console.log(validator.isEmail(email)?chalk.green.inverse('True'):chalk.red.inverse('False'));

 // Global Modules
 /* 
Global modules are node packages that are installed on your system rather than your project directory.
They allow us to use the package as a tool anywhere on the local computer.
--------------------------------------------------------
 -How to install a module globally:
  npm install -g <package-name>
--------------------------------------------------------
Local packages are installed in the directory where you run npm install <package-name>,
and they are put in the node_modules folder under this directory.
--------------------------------------------------------
When to use Global and Local:-
Install a module locally if you're going to require() it.
Install a module globally if you're going to run it on the command line like : 
--nodemon( nodemon is a tool that helps develop node.js based applications by automatically restarting
the node application when file changes in the directory are detected.)
i.e it automatically run your script node index.js script in command line when it found any changes in file.
 */

/*
About Nodemon:
if u installed it please check it to confirm that is it really installed by typing command:
nodemon -v
if no error than it goes nodemon version
else it will show this error:
nodemon : File C:\Users\user\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see 
about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
-------------------------
To remove this error go to the give directory above and delete that nodemon.ps1 file and you are good to go ;)
------------------------------------------
Type to start:---->> nodemon filename.js and boom;
(ctrl+c to exit)
*/