/*
Promises: 
   - The Promise object represents the eventual completion (or failure) of an
    asynchronous operation and its resulting value.
   - Container for an future values
   - Placeholder for an async operations


 - State - Pending, Resolved(Fullfilled), Rejected
 - Promise is object is "Immutable", we can't change the value
 - It will resolve or reject, it gives gurantee

A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
  -- ** --

 Fetch - Method returing an promise
 From promises we can't extract data directly without attaching the callbacks, to get the data
 using .then() method 

*/


let cart = ['shoes', 'phones', 'laptops'];
/*
  CallBack
  1. Here once the order is created
  2. Payment will be processed

  Inversion of control (Providing control to some other function)
  - Passing an function to another function, just trusting it(createOrder). 
*/
createOrder(card, function(orderId){
   proceedToPayment(orderId);
});

/*
  Promise
  1. Will create the empty promise object and data will be filled once the create order completed
  2. Attaching the callback function into promise object
  3. Promise will given guarntee and trust. We have control on it
*/

const promise = createOrder(cart);

promise.then(function (orderId){
    proceedToPayment(orderId);
});

//API Call
let GIT_API = "https://api.github.com/users/ranjith18996";

let user = fetch(GIT_API);

console.log('Call here');
console.log(user);
user.data = {name: 'Ranjith'} //Trying to mutuate, but don't work

user.then((data)=> console.log(data));

console.log('Call Final');


//Callback Hell
createOrder(cart, function (ordeInfo) {
  proceedToPayment(ordeInfo, function (paymentInfo) {
      showSummary(paymentInfo, function () {
          updateWallet();
      });
  });
});

//Overcome with promise and promise chaining (return keywork is must)
//retuning promises with 'return' keyword otherwise some data loss may happen
createOrder(cart)
  .then(function (ordeInfo) {
      return proceedToPayment(ordeInfo)
  })
  .then(function (paymentInfo) {
      return showSummary(paymentInfo)
  })
  .then(function (summaryInfo) {
      return updateWallet(summaryInfo)
  })

createOrder(cart)
  .then(ordeInfo => proceedToPayment(ordeInfo))
  .then((paymentInfo) => showSummary(paymentInfo))
  .then(summaryInfo => updateWallet(summaryInfo));
