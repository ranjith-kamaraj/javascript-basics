//Promise.all will go to catch block 'if anyone promise got failed'

let promise1 = new Promise((resolve, reject) => {
    console.log('Promise1 called');
    // resolve('Promise1 Success');
    reject('Promise1 Reject');
})

let promise2 = new Promise((resolve, reject) => {
    console.log('Promise2 called');
    resolve('Promise2 Success');
    // reject('Promise2 Reject');
})

Promise.all([promise1, promise2]).then((values) => {
    console.log(values);//success
}).catch((error) => {
    console.log(error); //failure
});


//Promise.allSettled will after all promises completed
//No catch block here, reponse return in obj format

let promise1 = new Promise((resolve, reject) => {
    console.log('Promise1 called');
    // resolve('Promise1 Success');
    reject('Promise1 Reject');
})

let promise2 = new Promise((resolve, reject) => {
    console.log('Promise2 called');
    resolve('Promise2 Success');
    // reject('Promise2 Reject');
})

Promise.allSettled([promise1, promise2]).then((responses) => {
    console.log(responses);
})


//Promise.allSettled will after all promises completed
//No catch block here, reponse return in obj format

let promise1 = new Promise((resolve, reject) => {
    console.log('Promise1 called');
    resolve('Promise1 Success');
    // reject('Promise1 Reject');
})

let promise2 = new Promise((resolve, reject) => {
    console.log('Promise2 called');
    resolve('Promise2 Success');
    // reject('Promise2 Reject');
})

Promise.race([promise1, promise2]).then((responses) => {
    console.log(responses);
}).catch((err)=> {
      console.log(err)
})
