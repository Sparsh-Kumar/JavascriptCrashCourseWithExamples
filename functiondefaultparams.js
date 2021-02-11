


/*
    while calling the function
    if the function needs a parameter,
    then the parameter is passed while calling the function
    but if we don't pass the value of parameter while calling
    the function then the default parameter will come into play
*/

let mainFunction = (person = { name: 'sparsh', age: 22 }, pokemon = { name: 'pikachu', type: 'electric' }) => {
    console.log (person);
    console.log (pokemon);
}

console.log ('logging the first case');
mainFunction ();
console.log ('logging the second case');
mainFunction ({name: 'nishkarsh', age: 45});
console.log ('logging the third case');
mainFunction (undefined, {name: 'nishkarsh', age: 456}) // Here in this case when we pass the undefined as first argument, then JS
                                                        // thinks that variable 'person' is not passed while calling the function
                                                        // mainFunction, then in that case it will take the default value of the 
                                                        // person variable