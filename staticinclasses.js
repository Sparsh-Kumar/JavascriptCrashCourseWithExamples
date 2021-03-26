
// NOTE - STATIC VARIABLES CANNOT BE INITIATED INSIDE THE CONSTRUCTOR


// In Object Oriented Programming , static properties of the class ( including static methods and variables ) are those properties
// which can be called without making the object of that class
// by just using the Syntax like "Classname.staticProperty"
// as we can see from above syntax that we can call static methods or static variables by just using the "." between the class name and static
// property name

class Animal {
    
    // constructor is the function that gets called when we made the object of the class
    // as we access Static properties of a class without making the object of the class
    // therefore constructor never gets called, therefore, if we try to initialize some 
    // static value in the constructor of the class then 
    // using the syntax "Classname,staticProperty" will not call the constructor method
    // of the class as we are not making the object of the class,
    // therefore constructor will never get called in that case and property will never get initialized

    constructor ( name = undefined, age = undefined ) {
        this.name = name;
        this.age = age;
    }
    
    static myStaticFunction () { // static functions cannot access the public variables it can only access a public variable if that public variable has been made inside the scope of that static function.

        this.publicVariable = 'this is the public variable inside a static function'
        return {
            functionType: 'static',
            classInfo: {
                className: 'Animal',
                classType: 'Parent',
                publicVariable: this.publicVariable
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