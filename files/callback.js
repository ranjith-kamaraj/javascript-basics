/*
  Callback and Callback Hell
   - Handling the async operation in JS 
   - Providing the whole access to another fn to execute the callback
   - Code will improve vertically instead of horizontally
   - Unreadable and Unmaintable
   - Structure is called as 'Pyramid Of Doom' 

Inversion Of Control
   - Lossing the control of code
   - Not sure if any bugs in createOrder function, may it can call proceedToPayment
   twice or thrice.

*/

//Orders Ex
let cart = ['shoes', 'bags'];

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showSummary(function(){
            api.updateWallet(function(){
            });
        });
    });
});

//To execute the asynchoronous functions
console.log('Call here 1');

//cb funtion passed into settimeout
setTimeout(()=>{
   console.log('Call here 2');
}, 1000);

console.log('Call here 3');

//Ex
function greet(name, callBack){
    console.log(`Hi ${name}!`);
    callBack();
};

function callMe(){
    console.log("Im callback fn!");
}

greet('Ranjith', callMe);

//Ex: 2
function greet(name, callback){
    console.log(`Hi ${name}!`);
    callback(name);
}

function callMe(param){
    console.log(`Im callback fn ${param}!`)
}

setTimeout(greet, 2000, 'John', callMe)
