// Function along with that lexical scope bundled together (enclosed) forms a closure

//Closures - A closure is a function having access to the parent scope, even after the parent function has closed.
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

/*
  Uses of Closures: 
    * Module Design Pattern
    * Curring
    * Fnc like once
    * memoize
    * miantaining state in async world
    * setTimeouts
    * Iterators and etc...
*/


//It will the ref of varaible not the value


function x(){ //Outer Function Scope
    var a = 10;

    function y(){
        console.log(a); // Inner Function
    }
    y();
}
x();
// 10

function x(){ //Outer Function Scope
    var a = 10;

    return y => { //here not only func returned whole closure got returned
        console.log(a); // Inner Function
    }
};

let z = x();
console.log(z);
z();

//Op:
// y => {
//     console.log(a); // Inner Function
// }
// 10


function x () {
    let a = 10;

    function y (){
        let b = 20;

        return function z () {
           console.log(a);
           console.log(b);
        }
        
    }
    return y();
}

let t = x();
console.log(t);
t();

// OP:
// ƒ z () {
//     console.log(a);
//     console.log(b);
//  }
//  10
//  20


function x () {
    let a = 10;

    function y (){
        let b = 20;

        function z () {
           console.log(a);
           console.log(b);
        }
        a = 100; // it keep the ref of a so value will be changed
        b = 300;

        return z;
        
    }
    return y();
}

let t = x();
console.log(t);
t();

//OP:
//100
//300


//Interview
function outer(b){
    // let a = 10;

    function inner(){
    //   let a = 40; // 40 will be output it's an nearable access
      console.log(a)
    }
    let a = 20;
    return inner;
}

// let a = 30; // If variable not there it will access parent hierachy

outer('hello')();// will call inner function as well
