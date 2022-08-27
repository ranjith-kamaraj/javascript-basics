// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

function call(){
    /*
        Here it will refer the ref of i due to closure logic
        Finally its end with 6, it will print 6 for all loops
        Will keep the each iteration func into some memory place with timer part
     */
   
    for(var i = 1; i <= 5; i++){
        setTimeout(()=> {
            console.log(i);
        }, i *  1000);
    }
    console.log('call');
}
call();
//OP:
// 6
// 6
// 6
// 6
// 6

function call(){
    /*
       To fix the issue in var
       Allocate the new memory for variable(x) every time, using closure
     */
   
    for(var i = 1; i <= 5; i++){

        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
       close(i);
    }
    console.log('call');
}
call();
//OP:
// 1
// 2
// 3
// 4


function call1(){
    /*
        Here it will refer the ref of i due to closure logic
        Declared the i with let so it's an block scope
        For each iteration new block will be created
        It will excute the diff value in order
     */
   
    for(let i = 1; i <= 5; i++){
        setTimeout(()=> {
            console.log(i);
        }, i * 1000);
    }
    console.log('call');
}
call1();
//OP:
// 1
// 2
// 3
// 4
// 5
