var util = require('util');

function Person(firstName, lastName){
    this.firstName = firstName || 'Gedaliah';
    this.lastName = lastName || 'Goldbaum';
}
Person.prototype.greet = function(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
}
const Yankel = new Person('Yankel', 'Rosen')
Yankel.greet()
function Cop(badge, firstName,lastName){
    Person.call(this, firstName,lastName)
    this.badge = badge || 12345;
}
util.inherits(Cop, Person)
const policeman = new Cop(1233,'Jakey', 'Mcdingy');
console.log(policeman)
policeman.greet();