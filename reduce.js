

// this is my custom Reduce function

class MyArray {
    
    constructor () {
        this.result = 0;
        this.values = Object.values (arguments);
    }

    MyReduce (callback = undefined, initial_value = undefined) {

        this.result = initial_value;
        for (let item of this.values) {
            this.result = callback (this.result, item);
        }

        return this.result;

    }

}

const main = () => {
    const a = new MyArray (4, 5, 6);
    const result = a.MyReduce ((summation, item) => {
        return summation * item;
    }, 1);
    console.log (result);
}

main ();