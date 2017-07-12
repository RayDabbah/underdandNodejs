function Greet(firstname, lastname) {
    this.firstname = firstname || 'Yankel';
    this.lastname = lastname || 'Grossnes';
    };

    Greet.prototype.greeting = function () {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
module.exports = function (firstname, lastname) {
    let obj = new Greet(firstname, lastname);
    return obj;
}
