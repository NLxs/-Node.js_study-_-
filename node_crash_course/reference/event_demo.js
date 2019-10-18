const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

const myEmitter = new MyEmitter();

myEmitter.on('event', () => console.log('Event Fired'));

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
