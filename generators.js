
/*
    a generator is simply a function in Javascript 
    that can be paused, this allow us to write our functions in asynchronous fashion
    ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions).
    A generator is a function that can stop midway and then continue from where it stopped.
*/

const mygenerator = function* () {
    yield 1;
    yield "sparsh";
    yield undefined;
    yield true;
    yield {
        name: 'sparsh',
        age:22
    }
    return { CustomDone: true } // we can return a value when all the values are done in the ending (or when { done: true } )
}

// setting up the generator for use
const invokeGen = mygenerator ();
console.log (invokeGen.next ());
console.log (invokeGen.next ());
console.log (invokeGen.next ());
console.log (invokeGen.next ());
console.log (invokeGen.next ());
console.log (invokeGen.next ());
console.log (invokeGen.next ()); // if done === true, then we have traversed all the values