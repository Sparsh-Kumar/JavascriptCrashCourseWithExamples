
// Making use of Object Deserialization syntax of ES-6

import { addition, substraction } from './modules/mathfunctions.js'
import * as ExtraMathFunctions from './modules/multiplicationfunction.js';

const additionResult = addition (10, 2);
const substractionResult = substraction (5, 100);
const multiplicationResult = ExtraMathFunctions.multiplication (5, 6);

// Now these console.log's run in browser console as this myscript.js file is
// running on index.html file, that is being hosted by the Node.js Server

console.log (additionResult);
console.log (substractionResult);
console.log (multiplicationResult);
console.log (ExtraMathFunctions.pi);