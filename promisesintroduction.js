


// promises are a better way to handle asynchronous functions of Javascript
// one way in which we can tell Javascript to perform a certain step only after completing previous step in an asynchronous function is
// making the use of callbacks, that makes sure that a certain step should execute only after completing the previous step in an asynchronous function
// but consider the scenerio in which the callback need to perform some other asynchronous function so that asynchronous function in that callback
// will also need it's own callback to perform a certain task after something is done successfully or not.
// so "if we have to chain a lot of asynchronous functionality , so that the next asynchronous functionality will execute after the completion of previous
// asynchronous functionality then if we make use of callbacks then the code will become so identated and very very problamatic to read, this situation
// is known as "CALLBACK HELL", to avoid this situation we make a better approach to chain asynchonous functionalities in an efficient way
// this is done using "async-await" in ES-7 or ".then () and .catch ()" in ES-6

// NOTE - IN A PROMISE ONLY ONE FUNCTION EXECUTES EITHER RESOLVE OR REJECT


const performTimeout = (numberOfSeconds = undefined) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (numberOfSeconds);
        }, numberOfSeconds - 1);

        setTimeout (() => {
            reject (numberOfSeconds);
        }, numberOfSeconds - 2)
    })
}

const main = () => {
    performTimeout (4).then ((result) => {
        console.log (result);

        // the given below if-else block will execute after the asynchronous call is completed and successfull.
        // execution goes into the ".then" callback if the promise succeed and the argument that has been passed into "resolve (arg.)" in promise
        // is seen as a result in ".then" callback function.
        if (result % 2 === 0) {
            console.log ('yes it is even');
        }
        else {
            console.log ('yes it is odd');
        }
    }).catch ((error) => {
        console.log ('Catched an error');
        console.log (error);
    })
}

main ();