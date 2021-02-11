
// Case 1 (a simple case of Object Destructuring)
const testingObj = {
    name: 'sparsh',
    surname: 'kumar',
    gender: 'male',
    address: {
        country: 'India',
        city: 'Sparsh city',
        postCode: 'My postCode',
        fullAddress: {
            doorNumber: 22,
            street: 'budaun'
        }
    },
    age: 23
};

//const { name, surname, gender, address } = testingObj;
//console.log (name);
//console.log (surname);
//console.log (gender);
//console.log (address);


// Case 2 (finding doorNumber step by step)
//const { address } = testingObj;
//console.log (address);
//const { fullAddress } = address;
//console.log (fullAddress);
//const { doorNumber } = fullAddress;
//console.log (doorNumber);


// Case 3 (finding doorNumber like in case 2 but in a single step)
// the ':' sign here is used to store the value that has been destructured
// into a variable having name that is specified in R.H.S of ':' sign

const { address: { fullAddress: { doorNumber: mydoorNumber } } } = testingObj;
const { address: { country: myCountry } } = testingObj;
const { address: { fullAddress: { street: myDalalStreet} } } = testingObj;
const { age: myAge } = testingObj; // Means destructure (or get) the value 'age' from testingObject and store it in a variable named 'myAge'
console.log (mydoorNumber);
console.log (myCountry);
console.log (myDalalStreet);
console.log (myAge);

