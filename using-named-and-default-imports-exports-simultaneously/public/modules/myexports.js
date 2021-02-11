


const add = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Please define both numbers to perform addition');
        }
        return number1 + number2;
    }
    catch (error) {
        return error.message;
    }
}

const multiplication = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Please define both numbers to perform multiplication');
        }
        return number1 * number2;
    }
    catch (error) {
        return error.message;
    }
}

let pi = 3.14159265;


/*
    Making use of both named and default exports
*/

export {
    add,
    multiplication as default,
    pi
}