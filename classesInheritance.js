
// defining the class Animal

// NOTE -> This is necessary that if you are performing classes Inheritance, then in that case you call "super ('parameters if needed')" function
// otherwise an error is thrown, super () is same as calling the constructor function of the parent class by the child class
// you cannot start setting properties or get properties from "child" class before calling the "parent" class constructor function using "super" keyword. 

class Animal {
    constructor ( name = undefined, age = undefined ) {
        console.log ('in animal constructor');
        this.name = name;
        this.age = age;
    }

    // animals eat function
    eat () {
        return {
            eat: {
                name: this.name,
                age: this.age
            }
        }
    }

    // animals sleep function
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
// as dog should also has properties like sleeping, eating etc so
// Dog class has some of its own properties but also has every property of class Animal
// so we can say that Dog class should inherit all the properties of class Animals
// this type of inheritance of properties of classes is known as Class Inheritance

class Dog extends Animal {
    constructor (name = undefined, age = undefined, breed = undefined, isveg = undefined) {
        super (name, age);
        this.breed = breed;
        this.isveg = isveg;
    }
    getDetails () {
        return {
            name: this.name,
            age: this.age,
            breed: this.breed,
            isveg: this.isveg
        }
    }
};

// defining the class Tiger
// as Tiger should also has properties like sleeping, eating etc so
// Tiger class has some of its own properties but also has every property of class Animal
// so we can say that Tiger class should inherit all the properties of class Animals
// this type of inheritance of properties of classes is known as Class Inheritance

class Tiger extends Animal {
    constructor (name = undefined, age = undefined, isveg = undefined) {
        super (name, age);
        this.isveg = isveg;
    }
    getDetails () {
        return {
            name: this.name,
            age: this.age,
            isveg: this.isveg
        }
    }
};

// defining the main function

let main = () => {
    let dog = new Dog ('poppy', 23, 'pomerian', true);
    let tiger = new Tiger ('babyTiger', 56, false);
    console.log (dog.getDetails ());
    console.log (tiger.getDetails ());
    console.log (dog.eat ());
    console.log (tiger.eat ());
    console.log (dog.sleep ());
    console.log (tiger.sleep ());
}

// calling the main function

main ()