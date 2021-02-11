

import defaultImport from './modules/myexports.js'
import { add, pi } from './modules/myexports.js'

/*
    we can also combine the two import statements
    that are given above
    import defaultImport, { add, pi } from './modules/myexports.js'
*/

console.log (defaultImport (2, 4));
console.log (pi);
console.log (add (3, 4));