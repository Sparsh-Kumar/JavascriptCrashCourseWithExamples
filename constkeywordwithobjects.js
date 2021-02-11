
/*
    given below is an example of demonstrating the use of 'const' keyword in objects in JS
*/

// here we have declared an object using 'const' keyword but still we can change the values
// of the object 'o' and can even add new fields

const o = {name: 'sparsh', age: 21}
console.log (o);

o.name = 'nishkarsh';
o.newfield = 'this is the new field';

console.log (o);

// actually declaring a variable using 'const' keyword means that JS will not allow to perform
// assignment operation on that variable
// in other words declaring a variable using 'const' keyword ceases the 'assignment' operation
// that can be performed on that variable
// but here we are not doing assignment operation on variable 'o'
// if we can change the values of the variable without making use of the assignment operation
// then the JS will allow us to do that without any problem
// even if the variable is declared using 'const' keyword
// that's why the above code runs successfully
// now try to do assignment on the above variable

o = {name: 'nishkarsh', age: 45, occupation: 'engineer'}
console.log (o);


// Let's repeat the whole above scenerio using 'let' keyword
// In this case the assignment operation we did last above will run successfully in it.

let g = {name: 'sparsh', age: 22}
console.log (g);

g.name = 'nishkarsh';
g.newfield = 'this is a new field'

console.log (g);

g = {name: 'nishkarsh kumar', age: 45, occupation: 'engineer'};
console.log (g);