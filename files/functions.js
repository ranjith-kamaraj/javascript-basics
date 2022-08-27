/* 
A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.

There are 3 ways of writing a function in JavaScript:
Function Declaration
Function Expression
Arrow Function


1. Function Declaration: Function Declaration is the traditional way to define a function. It is somehow 
similar to the way we define a function in other programming languages. We start declaring 
using the keyword “function”. Then we write the function name and then parameters.

// Function declaration
function add(a, b) {        
    console.log(a + b);
}
 
// Calling a function
add(2, 3);

2. Function Expression: Function Expression is another way to define a function in JavaScript. 
Here we define a function using a variable and store the returned value in that variable.


// Function Expression
const add = function(a, b) {
    console.log(a+b);
}
 
// Calling function
add(2, 3);


3. Arrow Functions: Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. 
Here we do not use the “function” keyword and use the arrow symbol.


// Single line of code
let add = (a, b) => a + b;
 
console.log(add(3, 2));

*/