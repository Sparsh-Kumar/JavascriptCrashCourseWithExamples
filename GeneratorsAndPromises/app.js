

// importing the coroutine from bluebird

const { coroutine } = require ('bluebird');


// defining the add function that is returning the promise

const add = (number1 = undefined, number2 = undefined) => {
    return new Promise ((resolve, reject) => {
        if (!number1 || !number2) {
            reject ('both the numbers are needed to be specified');
        } else {
            resolve (number1 + number2);
        }
    })
}

// now calling the main function will return us a promise
// we can make use of ".then" or ".catch" call to get the resolved 
// value or catch an error
// but we are going to make use of the generators and coroutines

// here in this function we are making a generator function and wrapping it inside the coroutine 
// "coroutine(generator_function)" keyword is just like "async ()" keyword and "yield" keyword is just like the "await" keyword

const generatorFunctionwithCouroutine = coroutine (function * (number1 = undefined, number2 = undefined) {
    const result = yield add (number1, number2); // IMPORTANT - If at any instant there is a rejected promise is returned by main function then generatorFunctionwthCouroutine will immediately return a rejected promise
    console.log (result);
    return result; // IMPORTANT - a coroutine wrapped generator function always returns a promise just like the async function
});

// handling the promise returned by generatorFunctionwithCoroutine ()
generatorFunctionwithCouroutine (31, 4).then ((data) => {
    console.log (data);
}).catch ((error) => {
    console.log (error);
})