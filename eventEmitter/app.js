const Emitter = require('./myEvents');

var emtr = new Emitter()

emtr.on('greet', function(){
    console.log('Someone greeted!!');
});

emtr.on('greet', function(){
    console.log('Someone double greeted!!');
});
emtr.emit('greet')
emtr.on('jump', function(){
    console.log('Someone Jumped!!!!')
})
emtr.on('jump', function(){
    console.log('Someone else Jumped!!!!')
})
emtr.emit('jump')
console.log(emtr)