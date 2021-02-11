

let myObject = {
    name: 'sparsh kumar',
    otherDetails: {
        age: 22,
        work: undefined,
        favouriteThing: 'Beer'
    }
};

let myObject2 = {
    name: 'Nishkarsh kumar',
    otherDetails : {
        age: 22,
        work: 'engineer',
        favouriteThing: 'eating'
    }
}

let myObject3 = {
    pokemon: 'Balbasaur',
    type: 'ground',
    address: {
        home: 'pokemon centre'
    }
}


// Learning how to display an Object
console.log (`Object is ${myObject}`);
console.log (`Object is ${JSON.stringify (myObject, undefined, 2)}`);

// Displaying values and keys of an object in an array form
console.log (Object.values (myObject));
console.log (Object.keys (myObject));


// making the copy of an Object
let copy1 = Object.assign ({}, myObject);
let copy2 = {...myObject}; // using the spread syntax
let copy3 = {...myObject, ...myObject2} // if two objects have same type of key then value for that key in rightmost object is considered
let copy4 = {...myObject, ...myObject3}

console.log (copy1);
console.log (copy2);
console.log (copy3);
console.log (copy4);
