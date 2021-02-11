

// the if else statements are used to check for specific conditions
// here we are defining a function to implement if else statements
// we are making use of ES-6 concepts, make sure you do so also, as it is a best practice

let a = (number) => {
    if (number === 2) {
        console.log ('number is 2');
    }
    else if (number === 3) {
        console.log ('number is 3');
    }
    else if (number === 4) {
        console.log ('number is 4');
    }
    else {
        console.log ('number is not 2, 3 or 4');
    }
}

let testingArray = [2, 3, 4, 5, 6];
for (let values of testingArray) {
    a (values)
}