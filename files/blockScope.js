// let and const - Block Scope -> Will be stored in 'separate memory' of block scope
// var - Function Scope

if(true) {
    //Comound Statement - Group of statements
    let a = 10;
    console.log(a);
    
}

// Where javascript expects single statements, there will provide group of statements
// Block Scope - What are functions and variables accepts inside block as block scope

{
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);
console.log(b);
console.log(c);

//Shadowing in js (Applicable in both variable and function)

// In computer programming, variable shadowing occurs when a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope.
var a = 10;
{
    var a = 20;
    console.log(a)
};
console.log(a);

//Op -> Here a is common memory in global scope, it's overiding with new value.
20
20

let a = 10;// Script Scope
{
    let a = 20; // Block Scope
    console.log(a)
};
console.log(a);

//Op -> Here a is memory keep diff memory. 
20
10

//Illegal Shadowing, but vice versa or functions (var) it won't break.

let a = 10;
{
    var a = 10;
}

//Lexical Scope - Chain pattern
//Each block scope separate memory will be created

let a = 10;
{
    let a = 20; 
    {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}
console.log(a);