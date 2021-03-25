/* 
Event Module:

  According to the official documentation of Node.js, it is an asynchronous event-driven JavaScript runtime.
  Node.js has an event-driven architecture which can perform asynchronous tasks.
  Node.js has ‘events’ module where you can create,fire,listen your own events. 
  Functions(Callbacks) listen or subscribe to a particular event to occur and when that event triggers, all the callbacks
  subscribed to that event are fired one by one in order to which they were registered.

The EventEmmitter class:
  All objects that emit events are instances of the EventEmitter class. The event can be emitted or listen to an event with the help of EventEmitter.
*/

//Syntax: here we have declared a class EventEmitter and imported all the modules in it;
const EventEmitter = require('events');

// create an instance name 'event' of it to access class EventEmitter;
const event = new EventEmitter();

// creating own event 
 event.on("MyName",()=>{console.log('Event triggered')});
// we can also call multiple callback functions with single event
 event.on("MyName",()=>{console.log('HELLO')});

 // this line emit the created event to work (its like calling the event )
 // event.emit is always written after creating event
event.emit("MyName");
//event.emit("event",200,ok); registering for the event with callback parameters;
