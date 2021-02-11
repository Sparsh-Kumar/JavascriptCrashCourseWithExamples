
// Map, reduce, filter can only be applied to the arrays in JS

// filter is an ES-6 feature 
// filter accepts a callback function

// firstly it initializes an empty array let result = []

// for every element of the calling array
// it passes the element as an argument to the callback function
// if the value returned by the callback function is true
// then the element that was passed into the callback is appended to the result array
// if the value returned by the callback function is not true
// then it doesn't append the value to the result array and moves to the next element of the calling array.

// at last it returns the result array


// example of filter is given below

let coordinates = [
    {  
      'name' : 'coordinate_1',
      'x' : 12,
      'y' : 123
    },
    {
      'name' : 'coordinate_2',
      'x' : 134,
      'y' : 57
    },
    {
      'name' : 'coordinate_3',
      'x' : 34,
      'y' : 52
    }
  ];


let result = coordinates.filter ((value) => {
    return (value.x === 12 || value.y === 52);
});

console.log (result);


// the inside structure of the filter would be like

class MyArray {
    constructor () {
        this.collection = Object.values (arguments);
    }

    MyFilter (callbackFunction) {

        let resultantArray = [];
        for (let value of this.collection) {
            if (callbackFunction (value)) {
                resultantArray.push (value);
            }
        }
        return resultantArray;

    }

};


let main = () => {
    let testArray = new MyArray ({'name' : 'coordinate_1', 'x' : 12, 'y' : 123 }, { 'name' : 'coordinate_2', 'x' : 134, 'y' : 57 }, {'name' : 'coordinate_3', 'x' : 34, 'y' : 52 });

    let result = testArray.MyFilter ((value) => {
        return (value.x === 12 || value.y === 52);
    });
    
    console.log (result);
}

main ();