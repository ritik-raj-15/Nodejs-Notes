/* 
The http.createServer() creates a server and it includes method of request and response as
parameter which is supplied by Node.js.
---------------------------------------
The request object can be used to get information
about the current HTTP request.
eg. url,request header, and data.
---------------------------------------
The response object can be used to send a response for a current request
---------------------------------------
server.listen(port, hostname, backlog, callback);
The server.listen() method creates a listener on the specified port or path.
i.e it active the service of server on the specified port;
127.0.0.1 host address = localhost(127.0.0.1 is the address of localhost)
localhost is the default hostname (local domain) which points to 127.0.0.1
-------------------------------------------------------------------------
Note:- when we specify hostname in listen method than that address become private and we can access port no from that host address only.
But when we don't specify any hostname than we can access port no from any host address.(it accept connections from all ips)
*/

const http = require('http');
const portno=8000;
const server = http.createServer((req,res)=>{
    res.end('Hello world');
});

server.listen(portno,"127.0.0.1",()=>{
    console.log(`listening to the port no: ${portno}`);
});



