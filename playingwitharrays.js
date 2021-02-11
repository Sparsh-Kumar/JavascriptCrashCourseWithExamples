

// array is a collection of same data type, but in js or Javascript it can be a collection of multiple
// data types, but it is a best practice, to always try to make array having all the elements of same datatype.

const anArray = [1, 2, 3, 4]; // homogenous array (having all the elements of same data type)
const anSecondArray = [1, 123.3, 'a char', 'sparsh', [1, 312, 1, 'a'], {name: 'sparsh', age: 22}]

console.log (anArray);
console.log (anSecondArray);

console.log (`type of anArray is ${typeof anArray}`);
console.log (`type of an second Array is ${typeof anSecondArray}`);

// making a clone of an array (having same values as the parent array, but at different memory address)

const copy1 = [...anSecondArray]; // making an array copy of an array using spread syntax
const copy2 = {...anSecondArray}; // making an object copy of an array using spread syntax

console.log (copy1);
console.log (copy2);