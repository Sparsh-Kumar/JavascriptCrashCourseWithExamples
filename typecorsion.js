

// type coersion can be called called as typecasting
// these are of two types implicit, explicit
// implicit typecoersion is done by javascript language itself
// when we perform operations such as 3 + 'javascript', gives us a result '3javascript'
// which is in the string form, in this typecasting user has no control
// the other one is explicit typecasting, for example
// let a = '1', here a is a string
// a = parseInt (a)
// now after performing operation of parseInt on string variable value '1'
// a becomes of number type having value 1
// in this type of typecasting user has full control, thus it is called explicit typecasting

// examples are given below

let a = 2
let b = 'javascript'

// implicit typecasting
let c = a + b
console.log (`value = ${c}, type = ${typeof c}`);

// explicit typecasting
let d = a.toString () + b
console.log (`value = ${d}, type = ${typeof d}`);

// implicit typecasting can produce unwanted results, thus should be avoided
