

export const multiplication = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Necessary to define both number1 and number2 for multiplication procedure');
        }
        return number1 * number2;
    }

    catch (error) {
        return error.message
    }
}


export const pi = 3.14159265;
