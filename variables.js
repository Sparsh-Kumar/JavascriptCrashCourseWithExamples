
// we can use var or let to specify the variable, but it is a best practice to use let for now, 
// both var and let have some differences, we will get to it later

let name = 'a';
let name2 = 'sparsh kumar';

let numeric1 = 123;
let numeric2 = 23.4;

let n = undefined;// both value and type are unknown or undefined
let m = null; // value is null or nothing but type is object

console.log (`value = ${name}, type = ${typeof name}`);
console.log (`value = ${name2}, typr = ${typeof name2}`);
console.log (`value = ${numeric1}, type = ${typeof numeric1}`);
console.log (`value = ${numeric2}, type = ${typeof numeric2}`);
console.log (`value = ${n}, type = ${typeof n}`);
console.log (`value = ${m}, type = ${typeof m}`);
