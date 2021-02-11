

// In Javascript there are 3 main important operators =, ==, ===

// the '=' operator is called the assignment operator, this operator assigns the value on it's right to the variable or constant
// specified on the left side of it
// for example let a = 2; or const b = 4; or let b = a, here a is another variable

// the == operator checks if the values specified on it's both sides are having same values or not
// this operator '==' only checks for same values not same datatype
// for example 1 == '1', this statement is true as both sides of == operator has same value 1, but
// one on the left side is a number and one on the right side is a string

// the === operator checks if the values specified on it's both sides are having same values and datatype both
// this operator '===' checks for same values and same datatypes both
// for example 1 === '1', this statement is false, as both sides of === operator has same values 1, but having
// different datatypes as one on the left side is a number and one on the right side is a string

// given below are some examples of these
let result = 2

console.log (result);
console.log (1 == 1);
console.log (1 == '1');
console.log (1 === '1');
console.log (1 === 1);