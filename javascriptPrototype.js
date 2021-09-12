
/**
 * https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/
 */


/**
 * 1. In JavaScript, every function and object has a property named prototype by default.
 * 2. The example depicting the above point is given below.
 */

function Person (name = '', age = 22, hobbies = []) {
    
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

    this.getDetails = function () {
        console.log (`The name = ${this.name}, age = ${this.age} and hobbies = ${JSON.stringify (this.hobbies)}`);
    }

}

/**
 * 1. Making the first Person Object
 */

const personFirst = new Person ('Sparsh Kumar', 22, ['Coding', 'Algorithms', 'Data structures']);
console.log (personFirst.__proto__);

/**
 * 1. In the above example, we are trying to access the prototype property of a Person constructor function.
 * 2. Since the prototype property has no value at the moment, it shows undefined
 */

/**
 * 1. In JavaScript, a prototype can be used to add properties and methods to a constructor function.
 * 2. And objects inherit properties and methods from a prototype. For example,
 */

Person.prototype.NameAndAge = function () {
    return `${this.name} - ${this.age}`;
};

Person.prototype.gender = 'male';

console.log (personFirst.NameAndAge ());
console.log (personFirst.gender);

/**
 * 1, Displaying the prototype value of personFirst
 */

console.log (personFirst.__proto__);