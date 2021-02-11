

// The one of the most important disadvantages of using arrow functions are these
// 'this' keyword does not work properly in arrow functions
// 'arguments' array cannot be used properly in arrow functions
// given is an example of ES-6 arrow functions, demonstrating these facts
console.log ('Handling the 1st case');
const testObject = {
    name: 'sparsh',
    age: 22,
    displayValue: () => {
        console.log (this.name);
        console.log (this.age);
    },
    displayArguments: () => {
        console.log (arguments);
    }
};

console.log (testObject);
testObject.displayValue ();
testObject.displayArguments (1, 3, 4, 4, 5); // displaying wrong unwanted values


// Now let's make use of ES-5 functions and now we can se that we can work effectively
// with 'arguments' array and 'this' keyword
console.log ('Handling the 2nd case');
const myObject = {
    name: 'nishkarsh',
    age: 34,
    displayValue: function () {
        console.log (this.name);
        console.log (this.age);
    },
    displayArguments: function () {
        console.log (arguments)
    }
}

console.log (myObject);
myObject.displayValue ();
myObject.displayArguments (23, 34, 345, 56);



// the way in which we can use ES-6 functions
// so that we can make use of 'this' keyword and 'arguments' array effectively
// is given below
console.log ('Handling the 3rd case');
const testingObject = {
    name: 'sparsh kumar',
    age: 22,
    displayValue () {
        console.log (this.name);
        console.log (this.age);
    },
    displayArguments () {
        console.log (arguments);
    }
}

console.log (testingObject);
testingObject.displayValue ();
testingObject.displayArguments (123, 324, 35, 5, 6656);