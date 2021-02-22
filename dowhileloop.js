
// defining the starting value
let index = 4;

// do-while loop executes at least once 
// even if the condition given in the while scope is false
// like this one

do {
    
    console.log (`Index = ${index}`);
    index = index + 1;

} while (index > 6);


// Second example of do while loop
// do part in a do while loop executes even if the 1st time the condition is false, if the first time condition is not false, then it will execute in the same manner (and same times) as while loop or for loop

let startIndex = 0;
do {
    console.log (`Index = ${startIndex}`);
    startIndex = startIndex + 1;
} while (startIndex < 5);

console.log (`Index = ${startIndex}`);
