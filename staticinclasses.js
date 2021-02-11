
// NOTE - STATIC VARIABLES CANNOT BE INITIATED INSIDE THE CONSTRUCTOR


// In Object Oriented Programming , static properties of the class ( including static methods and variables ) are those properties
// which can be called without making the object of that class
// by just using the Syntax like "Classname.staticProperty"
// as we can see from above syntax that we can call static methods or static variables by just using the "." between the class name and static
// property name

class Animal {
    constructor ( name = undefined, age = undefined ) {
        this.name = name;
        this.age = age;
    }
    
    static myStaticFunction () { // static functions cannot access the public variables
        return {
            functionType: 'static',
            classInfo: {
                className: 'Animal',
                classType: 'Parent'
            }
        }
    }

    static myfavoriteShow = 'netflix'; // this is an example of making use of a static variable

    myNonStaticFunction () {
        return {
            functionType: 'non static',
            classInfo: {
                className: 'Animal',
                classType: 'Parent'
            }
        }
    }
};

let main = () => {

    // trying to call the static function without making the object of the class "Animal"
    console.log (Animal.myStaticFunction ());

    // trying to call the static function after making the object of the class "Animal"
    // the statement below will thriw an error
    //const myanimal = new Animal ( 'balbasaur', 34 );
    //console.log (myanimal.myStaticFunction ());

    // trying the call the non static function after making the object of the class "Animal"
    // the statement below will not throw any error
    const animal = new Animal ( 'pikachu', 22 );
    console.log (animal.myNonStaticFunction ());

    // trying to call the non static function without making the object of the class "Animal"
    // the statement below will throw an error
    //console.log (Animal.myNonStaticFunction ());

    // logging the static variable ( always remind that you should not initiate the static variables inside the constructor of the class )
    console.log (Animal.myfavoriteShow);
}

main ()