
// defining the class Animal
class Animal {
    constructor ( name = undefined, age = undefined ) {
        this.name = name;
        this.age = age;
    }
    eat () {
        return {
            eat: {
                name: this.name,
                age: this.age
            }
        }
    }
    sleep () {
        return {
            sleep: {
                name: this.name,
                age: this.age 
            }
        }
    }
};

// defining the class Dog
class Dog extends Animal {
    constructor ( name = undefined, age = undefined, breed = undefined) {
        super ( name, age );
        this.breed = breed;
    }
    eatDog () {
        return super.eat (); // we can call any property (variable or function) of parent class using the keyword "super" 
    }
    sleepDog () {
        return super.sleep ();
    }
};

// defining the main function
let main = () => {
    let dog = new Dog ('poppy', 22, 'pomerian');
    console.log (dog.eatDog ()); // calling the eatDog function of class Dog that will in turn call the eat () function of parent class
    console.log (dog.eat ()); // as Dog class Inherits Animal class so all the properties of parent Animal class ( variables and functions )
                            // will be publically available in the "Dog" class, so Object of "Dog" class can call these properties ( variables and functions )
                            // using a ".", It's like writing all the inherited properties ( variables and functions ) of "Animal" class in the "Dog" class itself again
}

// calling the main function
main ()