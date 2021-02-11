

// I have to ask this example
// Query (why 'let' is not working as expected) why it is working as 'var' keyword here

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
