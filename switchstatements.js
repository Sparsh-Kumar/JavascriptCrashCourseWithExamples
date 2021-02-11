
// In switch statements, there is a value is given inside the switch scope
// and then we execute statements of that case whose value matches the value given in the switch scope
// it is better to use switch statements instead of if else because switch statements make a table inside
// the computer memory, and use it thus switch statements are faster in comparison with the chaining if-else statements.

// given below is an example that demonstrate how to use switch statements, in place of chaining if-else statements

let CheckFunction = (number1, number2) => {
    switch (true) {
        case number1 > number2:
            console.log ('Number 1 is greater than Number 2');
            break;
        case number1 < number2:
            console.log ('number 1 is lesser than Number 2');
            break;
        default: // default case is that case which runs when no case values matches the value given in the switch scope
            console.log ('The two given numbers are equal');
            break;
    }
}

let number1 = 4;
let number2 = 4;

CheckFunction (number1, number2);