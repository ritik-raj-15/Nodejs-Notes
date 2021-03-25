// What are streams?
// Streams are one of the fundamental concepts that power Node.js applications.
// They are data-handling method and are used to read or write input into output sequentially.
// Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
//------------------------------------------------------------------------------------------------------------------------------------------------
// What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, 
// streams read chunks of data piece by piece, processing its content without keeping it all in *memory*.
// This makes streams really powerful when working with large amounts of data, for example, a file size can be 
// larger than your free memory space, making it impossible to read the whole file into the memory in order to process it. That’s where streams come to the rescue!
// Using streams to process smaller chunks of data, makes it possible to read larger files.

// Let’s take a “streaming” services such as YouTube or Netflix for example: these services don’t make you download the video and audio feed all at once.
// Instead, your browser receives the video as a continuous flow of chunks, allowing the recipients to start watching and/or listening almost immediately.
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Why streams??
// Streams basically provide two major advantages compared to other data handling methods:
// 1.) Memory efficiency: you don’t need to load large amounts of data in memory before you are able to process it
// 2.) Time efficiency: it takes significantly less time to start processing data as soon as you have it, rather than having to wait with processing until the entire payload has been transmitted

/* Each type of Stream is an EventEmitter instance and throws several events at different instance of times.
   some of the commonly used events are-:
   data- This is fired when there is data available to read.
   end- This is fired when there is no more data to read. 
   error- This is fired when there is any error receiving or writing data.
   finish- This is fired when all the data has been flushed to underlying stream.
*/

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request",(req,res)=>{
    //1.) Method
    // const rstream=fs.createReadStream("input.txt");
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("File Not Found");
    // })


    //2.) Method the faster and short one 
    // 
    const rstream=fs.createReadStream("input.txt");
    rstream.pipe(res);// rstream has data of input.txt file and pipe() requires a parameter where to write tha data;
});
server.listen(8000,()=>{console.log("Port is listening");});