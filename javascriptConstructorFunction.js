


/**
 * 1. In JavaScript, a constructor function is used to create objects. For example,
 * 2. To create an object from a constructor function, we use the new keyword.
 * 3. An example of creating multiple objects from constructor function is given below.
 */


function PersonConstructorFunction (name = '', age = 22, hobbies = []) {
    
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

    // we can also add functions as properties using constructor function
    this.getDetails = function () {
        return `Person name is ${this.name}, having age = ${this.age} having hobbies = ${JSON.stringify (this.hobbies)}`;
    }

}


// creating multiple objects using the constructor function

const firstPerson = new PersonConstructorFunction ();
const secondPerson = new PersonConstructorFunction ('Sparsh', 23, ['Reading', 'Coding', 'Trading']);


// displaying the details of first Person and Second Person

console.log (firstPerson);
console.log (secondPerson);

// getting data of firstPerson

console.log (firstPerson.getDetails ());

// getting data of secondPerson

console.log (secondPerson.getDetails ());


/**
 * Adding New Properties to one of the Object that has been created using Constructor Function
 */

const thirdPerson = new PersonConstructorFunction ('Nishkarsh', 17, ['Reading', 'Writing', 'Coding']);
const fourthPerson = new PersonConstructorFunction ('Sparsh Kumar', 24, ['Coding', 'Algorithms']);

/**
 * Adding the new Property to thirdPerson named 'Quality'
 * You can also add new Properties as functions in the Object
 */

thirdPerson.Quality = 'Cleverness';

/**
 * Displaying the values of thirdPerson and fourthPerson
 */

console.log (thirdPerson);
console.log (fourthPerson);