
// Consider a testing array
let testingArray = [12, 123.34, 's', 'sparsh kumar']

// Iterating using general for loop
console.log ('Making use of for loop')

for (let index = 0;index < testingArray.length;index = index + 1) {
    console.log (testingArray [index]);
}

// Using general while loop

console.log ('Making use of while loop')
let counter = 0;

while (counter < testingArray.length) {
    console.log (testingArray [counter]);
    counter = counter + 1;
}

// using in operator both arrays and objects can be iterated
// for arrays i becomes the index of the values 
// for objects i becomes the keys for the values

console.log ('Making use of in operator');

for (let i in testingArray) {
    console.log (testingArray [i]);
}

// making use of of operator arrays can be iterated
// unlike 'in' operator 'of' operator insert each value of the array into variable i
// whereas 'in' operator insert index for each value into variable i as shown above

console.log ('Making use of "of" operator');

for (let i of testingArray) {
    console.log (i);
}


// MOST IMPORTANT ES-6 FEATURE TO ITERATE AN ARRAY IS USING FOREACH

console.log ('Making use of asynchronous function foreach as asynchronous functions increases speed of code execution');
testingArray.forEach ((item, indexOfItem) => {
    console.log (`Item = ${item}, index = ${indexOfItem}`);
});