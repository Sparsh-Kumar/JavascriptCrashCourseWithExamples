
// Case 1
/*
    While doing array destructuring on the left hand size
    we give the variable names and on the right hand size, we give the 
    array
    the variable names takes the values that occur at those indices in the array
    for example value1 variable will hold the value at the index 0 in the array on R.H.S
*/

let myTestArray = [12, 45.56, 'this is the test string', {name: 'sparsh', age: 22, testObj: {a: 1, b: 234.45} }];
const [value1, value2, value3, value4] = myTestArray;
console.log (value1);
console.log (value2);
console.log (value3);
console.log (value4);

// Case 2
/*
    If we want to skip the value for example perform array destructuring
    for value at index 0 and then for value at index 5
    then it will be performed as given below
*/

let mySecondtestArray = [12, 45.56, 'this is the test string', {name: 'sparsh', age: 22, testObj: {a: 1, b: 234.45} }];
const [firstVal, secondVal, ,fourthVal] = mySecondtestArray; // Here we are skipping the third value and then storing the fourth value
console.log (firstVal);
console.log (secondVal);
console.log (fourthVal);

// Case 3
/*
    If we want only some of the values and want to store the rest of the values
    in the another array then we can do this by the method given below 
*/

let myThirdArray = [12, 45.56, 'this is the test string', {name: 'sparsh', age: 22, testObj: {a: 1, b: 234.45} }];
const [firstValue, secondValue, ...remainingValues] = myThirdArray; // in remainingValues variable the remaining values will be stored in the form of array
console.log (firstValue);
console.log (secondValue);
console.log (remainingValues);
