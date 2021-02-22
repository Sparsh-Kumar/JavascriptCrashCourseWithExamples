

// I have to ask this example
// Query (why 'let' is not working as expected) why it is working as 'var' keyword here
// because on getting the yield statement (in the loop in getNumbers function ) the execution of the for loop pauses and does not go outside the scope of the "for" loop thus the memory of the variable index is not freed
// the memory of the variable "index" (in the loop in getNumbers function) will only gets freed when program execution gets out of the scope of the "for" function.

const getNumbers = function *(mytestArray = undefined) {
    if (mytestArray) {
        for (let index = 0;index < mytestArray.length;index++) {
            yield mytestArray [index];
        }
    }
    return { customDone: true };
}

let mygenerator = getNumbers ([1, 2.34, 'sparsh', 'd', { name: 'sparsh', age: 22 }]);
//let mygenerator = getNumbers ();

const interval = setInterval (() => {
    let nextData = mygenerator.next ();
    if (nextData.done) {
        clearInterval (interval);
    } else {
        console.log (nextData);
    }
}, 3000);
