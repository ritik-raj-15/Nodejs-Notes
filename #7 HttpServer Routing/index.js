// This exercise explains how to call API and display the data;
// 1.) Create json file and put the data in it
// 2.) Read the json file in server by using file system module; 
//
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{

    const data=fs.readFileSync("./UserApi/userapi.json","UTF-8");
    //Routing
    if(req.url=='/')
        res.end("Welcome to Home page");
    else if(req.url=='/about')
        res.end("Welcome to About page");
    else if(req.url=='/userapi')
    {
      res.writeHead(200,{"Content-Type":"application/json"});// we are fetching data from json file
      res.end(data);
    }
    else
    {
        //Setting up status code for error page and changing the content type
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>Error 404, Page not Found</h1>");
    }
});

server.listen(8001,(err)=>{console.log('listening to port no 8001')});
//reference link:- https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server

/* ---------------------------------------------------------------------------------- 
BONUS: IF U WANT TO TRY YOUR SERVER ON MOBILE browser , connect your pc with mobile wifi;
OPEN CMD : WRITE A COMMAND "ipconfig";
and look for ipv4 address;
open your mobile browser and write down the ipv4_address:port_no and Boom !!
*/