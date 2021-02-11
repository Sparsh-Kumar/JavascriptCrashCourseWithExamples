

const addition = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Both numbers must be defined to perform addition');
        }
        return (number1 + number2);
    }
    catch (error) {
        return error.message
    }
}

const substraction = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Both numbers must be defined to perform substraction');
        }
        return number1 - number2;
    }
    catch (error) {
        return error.message
    }
}

/*
    In node.js a module can be exported by making the use
    of module.exports = {

    }

    but in the case of front end javascript that runs in HTML
    pages or in the case of Angular, we make use of 'export' keyword
    to export a value or a module.

    export in Angular or front end Javascript can be used in two ways

    1. by exporting and defining a value at the same time
    export let pi = 3.14159265
    export const pi = 3.14159265

    2. by exporting an object, for example as we have defined our two functions
    addition and substraction, we can export them using ES-6 syntax
    export {
        addition,
        substraction
    }

    which is equal to
    export {
        addition (key name): addition ( our addition variable which is equal to a function that performs addition of two numbers),
        substraction (key name): substraction ( our substraction variable which is equal to a function that performs substraction of two numbers)
    }

*/

export {
    addition,
    substraction
}