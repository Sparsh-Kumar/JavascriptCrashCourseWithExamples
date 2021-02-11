
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
// do part in a do while loop executes n + 1 times, where n = no. of times the condition in the while scope remain true

let startIndex = 0;
do {
    console.log (`Index = ${startIndex}`);
    startIndex = startIndex + 1;
} while (startIndex < 5);

console.log (`Index = ${startIndex}`);
