

// we can make use of promise chaining technique to chain a number of asynchronous functions that are to be executed
// the promise chaining technique is a better way to execute asynchronous functions as compared to callbacks, 
// that can result into callback hell

// NOTE = WE CAN MAKE USE OF COMMON ".CATCH" FUNCTION IN PROMISE CHAINING METHODOLOGY, IF IN ANY OF THE PROMISES SOME ERROR OCCUR THEN IN THAT CASE THAT
// ERROR WILL BE PASSED ON TO THE ".CATCH" FUNCTION WHICH WILL HANDLE THESE ERRORS ACCORDING THE USER INSTRUCTIONS.

// defining the first promise
const mypromise_1 = (numberOfSeconds = undefined) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (numberOfSeconds - 1);
        }, numberOfSeconds - 2)
        setTimeout (() => {
            reject (numberOfSeconds);
        }, numberOfSeconds)
    });
}

// defining the second promise
const mypromise_2 = (numberOfSeconds = undefined) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (numberOfSeconds * 2);
        }, numberOfSeconds);
        setTimeout (() => {
            reject (numberOfSeconds + 4);
        }, numberOfSeconds - 2)
    })
}

// chaining the promises together to work in an efficient way and making use of a common
// error function to handle any error that are thrown by calling mypromise_1 or mypromise_2

mypromise_1 (4).then ((resultantNumber) => {
    return mypromise_2 (resultantNumber);
})
.then ((result) => {
    console.log (`Result = ${result}`);
})
.catch ((error) => {
    console.log (`Error: ${error}`);
})