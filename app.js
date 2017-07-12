greet = require('./greet');
var Shmerel = new greet('Gedaliah')
Shmerel.lastname = 'Goldbrenner';
console.log(Shmerel);
Shmerel.greeting();
var Yankel = new greet();
console.log(Yankel);
Yankel.greeting();