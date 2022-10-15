console.log('0.1+0.2 = 0.3') // Will fail

console.log(2+(3+5)+8);

console.log(" ---- Behaves Normally ----")
setTimeout( function(){
    for(let i =0; i < 5; i++){
        console.log(i);
    }
}, 2000);


console.log(" ---- Behaves Normally ----")
for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}

console.log(" ---- Will print last ele used var ----")

for(var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}

let id =setInterval(()=> {
    console.log('call here' + JSON.stringify(id))
}, 2000);

clearInterval(id);

/* ---  ---- */

Promise.resolve(console.log('Promise without instance!'));
 
let p1 = new Promise((res, rej) => {
    res('Promise 1')
});

let p2 = new Promise((res, rej) => {
    res('Promise 2')
});

let p3 = new Promise((res, rej) => {
    res('Promise 3')
});

setTimeout(()=> {
    console.log('Set Timeout here');
}, 0);

p1.then((res) => console.log('P1 output: ' + res));

Promise.all([p2, p3]).then((res) => console.log('Promise all:' + res))

console.log('Test');

// Output:
// Promise without instance!
// Test
// P1 output: Promise 1
// Promise all:Promise 2,Promise 3
// Set Timeout here


async function greedy(){
    return 'Hi,'
};

async function wishing(){
    let a = 10
    return 'Good Evening!'
}

async function details(){
    
    //Error
    //  let greet =  greedy();
    //  let wish =  wishing();
    
    //Will Work
    //  let greet = await greedy();
    //  let wish = await wishing();
    
    //  console.log(greet, wish)
    
    //Will return whole function
    // Promise.all([greedy, wishing]).then((res) =>{
    //   console.log(res[0] + ' '+ res[1]);
    // })
    
    //Func should be invoked
    // Promise.all([greedy(), wishing()]).then((res) =>{
    //   console.log(res[0] + ' '+ res[1]);
    // });
    
    // let output = Promise.all([greedy, wishing]); //Promise { <pending>}
    // let output = Promise.all([greedy(), wishing()]);//Return whole fn or pending
    let output = await Promise.all([greedy(), wishing()]); 
    console.log(output)
};

details();