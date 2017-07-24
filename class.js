class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log(`How are you ${ this.firstname} ${this.lastname}?`);
    }
}
var yankel = new Person('Yankel', 'Goldbaum')
console.log(yankel)
yankel.greet()