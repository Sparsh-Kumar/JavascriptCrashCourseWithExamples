

function Person (name = '', age = 0, hobbies = ['Coding', 'Data structures and Algorithms', 'Eating']) {
    
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

}

Person.prototype.age = 40;

/**
 * Creating the object after setting the prototype value of age to 40.
 */

const firstPerson = new Person ('Sparsh Kumar', 22, ['Coding', 'DSA']);

/**
 * Changing the prototype value of age to 100
 */

Person.prototype.age = 100;

/**
 * Creating the second person Object
 */

const secondPerson = new Person ('Second Person', 23, ['Eating', 'Coding']);


/**
 * 1. If a prototype value is changed, then all the new objects will have the changed property value.
 * 2. All the previously created objects will have the previous value. For example.
 */


console.log (firstPerson);
console.log (secondPerson);