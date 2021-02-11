/*
    Default exports are useful to export only a single object, function, variable. 
    During the import, we can use any name to import.
*/

import a from './modules/defaultexport.js';

let result = a (3, 4);
console.log (result);
