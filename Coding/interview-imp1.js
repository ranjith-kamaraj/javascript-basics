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