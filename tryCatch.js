try{
    var a = 5;
    var b = 8;
    console.log(a * b)
    throw "This isn't working";
    var c = a +b;
}
catch(e){
    console.log(e)
}
finally{
    console.log(c, a);
}