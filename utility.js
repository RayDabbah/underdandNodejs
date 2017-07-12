var util = require('util');

var a = 'apple';
var b = 'banana';
var c = 321;
var d = [1, 'avocado',true];
var e = false;
var f = {
    name: 'George',
    place: 'Yerushalaim',
}

var utility = util.format('Hello, %d', a, b, c , d, e, f);
console.log(utility)
