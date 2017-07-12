
function Emitter(){
    this.events = {};
}
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    console.log(this.events[type])
    this.events[type].push(listener);
}
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(element) {
            element();
        });
    }
}
module.exports = Emitter;