
                NOTE-1
===============================================
In order for us to make use of import and exports
in Javascript, we must host our front end page using
some server, It can be on xampp, or php or node.js server,
but without making use of some server to host the page (on which
the js code has to be run), it may lead to some error,
as you can see even in the case of angular, a server is used to host the
frontend application, so in Angular we can extensively make use of
import and export statements in Javascript also to make use of a Javascript file
that can make use of import and export statements we have to always make sure that
the type must always be module, rather than simple text/javascript, otherwise if
we keep the type = text/javascript then the Javascript file that we are using in HTML
using src attribute cannot make use of import and export statements in it.


                NOTE-2
===================================================
In node.js a module can be exported by making the use
of module.exports = {

}
but in the case of front end javascript that runs in HTML
pages or in the case of Angular, we make use of 'export' keyword
to export a value or a module.

export in Angular or front end Javascript can be used in two ways

1. by exporting and defining a value at the same time
export let pi = 3.14159265
export const pi = 3.14159265

2. by exporting an object, for example as we have defined our two functions
addition and substraction, we can export them using ES-6 syntax
export {
    addition,
    substraction
}

which is equal to
export {
    addition (key name): addition ( our addition variable which is equal to a function that performs addition of two numbers),
    substraction (key name): substraction ( our substraction variable which is equal to a function that performs substraction of two numbers)
}


                NOTE-3
======================================================

1. In Node.js we make use of 'require' keyword to import an exported module
from some other file for example

const { addition, substraction } = require (path.resolve (__dirname, 'modules', mathfunctions));

2. In Angular or front end Javascript we make use of 'import' keyword
using import is very simple, we can make use of 'import' keyword for importing a module in
our other front End Javascript File as given below

import { addition, substraction } from './modules.mathfunctions.js';

in the above example we make use of the object deserialization method,
but we can also make use of other syntax, this is discussed in NOTE-4.
                                                            ==========



                NOTE-5
========================================================
1. suppose there is a file named myexports.js
    and content inside it is as
    export let pi = 3.14159265;
    export const add = (number1, number2) => {
        return number1 + number2;
    }

2. Now we are working in a file named myimports.js,
    now if I have to import all the exports that are made by myexports.js
    in the form of a single object, then i will follow the following syntax

    import * as MyImports from './modules/myexports.js';

    in the above statement '*' stands for eveything,
    thus the above statement is saying
    
    import everything that './modules/myexport.js' file is exporting and chunk it into a single Object
    named MyImports

    Now MyImports would be like

    (In ES-6 representation)
    MyImports = {
        pi,
        add
    }

    which is same as in ES-5 syntax
    MyImports = {
        pi (key name): pi (name of the variable that is being exported having value 3.14159265),
        add (key name): add (name of the constant that is being exported from myexport.js that defines a function to perform addition of two numbers)
    }

    console.log (MyImports.pi);
    console.log (MyImports.add (2, 4));