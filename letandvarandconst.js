

/*
    =>
    In a function if we declare a variable using 'var' keyword then the variable is always available
    for operation inside the scope of that function, but we cannot access that variable outside the scope
    of that function

    =>
    In a function if we declare a variable using 'let' keyword then the variable is always available
    for operation inside the scope of that function, but we cannot access that variable outside the scope
    of that function

    =>
    thus a variable if declared inside a function using 'var' or 'let' keyword, then the variable will behave
    almost in same ways in both the cases.
*/

let function1 = () => {
    let variable1 = 34;
    console.log (`Inside function1 variable1 = ${variable1}`);
};

let function2 = () => {
    var variable2 = 45;
    console.log (`Inside function2 variable2 = ${variable2}`);
};

function1 ();
function2 ();

//console.log (`Outside function1 variable1 = ${variable1}`);
//console.log (`Outside function2 variable2 = ${variable2}`);

/*
    But if we talk about lifetime scope of a variable in other things like for, while, do-while loops

    =>
    if we declare a variable using 'var' keyword then in that case it can be accessible outside the scope of if-else scopes , while, do-while, for loops scopes.
    if we declare a variable using 'let' keyword then in that case it cannot be accessible outside the scope of if-else scopes, while, do-while, for loop scopes.
    (in other words we can say that if we declare a variable in JS using 'let' keyword then it cannot have a lifetime outside the scope of if-else, while, do-while, for statements in
    which the variable is declared)
    (but if we declare a variable in JS using 'var' keyword then it has a lifetime outside the scope of if-else, for, while, do-while statements
    in which variable is declared)

*/

for (var m = 0;m < 5;m++) {
    console.log (`Inside loop m = ${m}`);
}

for (let n = 2;n < 9;n++) {
    console.log (`inside loop n = ${n}`);
}

console.log (`outside loop m = ${m}`);
//console.log (`outside loop n = ${n}`);



/*
    now let's talk about const keyword 
    it is used to declare constant variable
    whose values cannot be changed later
    example to demonstrate the use of 'const' keyword 
    is given below
*/

const value1 = 324;
console.log (value1);
// value1 = 32;
// console.log (value1);
