var myBuffer = new Buffer('Hello', 'utf8')
console.log(myBuffer.toString())
console.log(myBuffer.toJSON())


// typed Arrays

var typedArrayBuffer = new ArrayBuffer(32)
var info = new Int32Array(typedArrayBuffer)
info[0] = 280;
console.log(typedArrayBuffer)
console.log(info)