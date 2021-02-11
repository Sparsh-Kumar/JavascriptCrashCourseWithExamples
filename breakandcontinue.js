
// Both break; and continue; keyword can only be used inside loops

// when a js code encounter a break; keyword then it immediately exit the loop in which the break; keyword is written
// example of js code using break; keyword is given below

// making use of var keyword here. difference b/w var and let keyword is discussed later

for (var index = 1;index < 10;index = index + 1) {
    if (index % 4 === 0) {
        break;
    }
    console.log (`Inside the loop index = ${index}`);
}

console.log (`Outside the loop index = ${index}`);


// when a js code encounter a continue; keyword then in that case it move to the next iteration of the loop in which the continue;
// keyword is written, without executing all the statements that are specified below the continue; keyword

for (let index = 1;index < 10;index = index + 1) {
    if (index % 4 === 0) {
        continue;
    }
    console.log (`Statement executed after index = ${index}`);
}