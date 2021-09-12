



/**
 * 
 * @param {*} name 
 * @param {*} age 
 * @param {*} hobbies 
 */

function Person (name = '', age = 24, hobbies = ['Coding', 'DSA', 'Eating']) {
    
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

}


/**
 * JavaScript Prototype Chaining
 * ==============================
 * 
 * 1. If an object tries to access the same property that is in the constructor function and the prototype object, 
 *    the object takes the property from the constructor function.
 * 2. The working example is given below.
 * 
 */

Person.prototype.age = 56;
Person.prototype.g = '1241';

const person = new Person ('Sparsh Kumar', 10, ['Algorithms', 'Coding', 'DevOps']);

console.log (person);
console.log (person.__proto__);
console.log (person.age);
console.log (person.g);