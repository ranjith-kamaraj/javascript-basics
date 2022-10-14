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