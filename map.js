
// Map, reduce, filter can only work on arrays


// This useful array method creates a new array 
// with the results of calling a provided function
// On every element in the calling array

// firstly it makes an empty array suppose r = []
// then for each element of the calling array it
// executes the callback function and pass the element
// as an argument to the callback the returned value from 
// the callback function is appended to the array r

// example of using map is given below

let coordinates = [
    {  
      'name' : 'coordinate_1',
      'x' : 12,
      'y' : 123
    },
    {
      'name' : 'coordinate_2',
      'x' : 134,
      'y' : 52
    },
    {
      'name' : 'coordinate_3',
      'x' : 34,
      'y' : 52
    }
  ];

let returnedResult = coordinates.map ((element) => {
    return element.name + '-' + element.x.toString () + '-'  + element.y.toString ();
});

console.log (returnedResult);

// the innerStructure of map would be like

class MyArray {
    
    constructor () {
        this.valuesCollection = Object.values (arguments);
    }

    myMap (callbackFunction) {

        let resulantArray = [];
        for (let value of this.valuesCollection) {
            resulantArray.push (callbackFunction (value));
        }
        return resulantArray;

    }
}

let main = () => {

    let array = new MyArray (1, 2, 3, 4, 5);
    let result = array.myMap ((MyValues) => {
        return MyValues * 2;
    });

    console.log (result);

}

main ()