const Emitter = require('events');
const event = require('./eventObj');

var emtr = new Emitter()

emtr.on(event.greet, function(){
    console.log('Someone greeted!!');
});

emtr.on(event.greet, function(){
    console.log('Someone double greeted!!');
});
emtr.emit(event.greet)
emtr.on(event.jump, function(){
    console.log('Someone Jumped!!!!')
})
emtr.on(event.jump, function(){
    console.log('Someone else Jumped!!!!')
})
emtr.emit(event.jump)
console.log(emtr)