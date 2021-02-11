
// When we make the Object of a class then automatically the constructor function gets called and perform it's functions

class Animal {
    constructor ( name = undefined, age = undefined ) {
        this.name = name;
        this.age = age;
    }
    sleep () {
        return {
            sleep: {
                name: this.name,
                age: this.age
            }
        }
    }
    eat () {
        return {
            eat: {
                name: this.name,
                age: this.age
            }
        }
    }
};

// defining the main function

let main = () => {

    let animal = new Animal ('sparsh', 22);
    console.log (animal.sleep ());
    console.log (animal.eat ());

}

// calling the main function

main ();