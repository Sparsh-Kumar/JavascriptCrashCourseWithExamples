/*
    Default exports are useful to export only a single object, function, variable. 
    During the import, we can use any name to import.
*/

const add = (number1, number2) => {
    try {
        if (!number1 || !number2) {
            throw new Error ('Both numbers should be defined to perform addition');
        }
        return number1 + number2;
    }
    catch (error) {
        return error.message
    }
}

export default add;