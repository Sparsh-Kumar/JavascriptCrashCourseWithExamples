

// promise.all (["array of promises"]) is a function that is used to 
// wait for all the promises in the "array of promises" to get resolved
// and then make use of ".then" function to execute a number of steps after they got resolved
// NOTE = If any one of the promises gets rejected, then control immediately goes into ".catch" function of promise.all
// so you would not get the result of all successfull promises also
// so the statements inside the ".then ()" function in "promise.all" will only gets executed if all the promises in the "array of promises"
// get resolved successfully.

const promiseMaker = ( numberOfSeconds = undefined ) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (numberOfSeconds % 2 === 0) {
                resolve (`Resolved promise after ${numberOfSeconds}`);
            } else {
                reject (`Reject promise after ${numberOfSeconds}`);
            }
        }, numberOfSeconds)
    })
};


let promiseArray = [];
let durations = [1000, 2000, 40000] // the time is in milliseconds
for (let duration of durations) {
    promiseArray.push (promiseMaker (duration));
}

// inserting a rejection promise to pushed in promiseArray
promiseArray.push (promiseMaker (3));

Promise.all (promiseArray).then ((result) => {
    console.log ('Result is');
    console.log (result);
}).catch ((error) => {
    console.log (`Catched Error: ${error}`);
})