/*
  In Promise chaining, we needs to pass the data from prior level to next level using
  return.
  If any level fails it will come to common catch block

  Note: 'catch' will play the main role to execute the code in all level.
  Level 1 -> if any error, remaining level needs to be execute means, we have move catch into
  level 1. Now remain levels will get execute.

  We can add catch in level or generic form.
*/

const cart = ['shoes', 'monitor'];

createOrder(cart, false)
    .then((orderId) => {
        console.log(orderId);
        return orderId;
    })
    .catch(function (error) {
        console.log(error.message)
    })
    .then(function(orderId){
        return proceedToPayment(orderId, true);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
    })
    .catch(function (error) {
        console.log(error.message)
    })
    .then(() => {
        console.log(`I will get execute surely!`);
    });

/* Promise Producer 
   - new Promise(), creating promise it's an constructer. It accepts function
   - resolve and reject -> functions
*/



function createOrder(cart, flag) {

    let pr = new Promise((resolve, reject) => {
        if (!flag) {
            let error = new Error('Cart is invalid!');
            reject(error);
        };

        let orderId = '878787888878'; //Db query or API call
        setTimeout(() => {
            resolve(orderId);
        }, 1000);
    })

    return pr;
};

function proceedToPayment(orderId, flag){
   return new Promise((resolve, reject) => {
       if(!flag){
        let error = new Error('Payment Failure!');
           reject(error);
       }
       resolve('Payment Successful!')
   })
}


