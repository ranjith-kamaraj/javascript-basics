// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


//Working on the Keys
let array = [1,5,6,7,3,4,2,9];

console.log('---- for loop ----');

for(let i =0; i< array.length; i++){
    console.log(array[i]);
}

console.log('---- while loop ----');

let i = 0;
while(i < array.length){
    console.log(array[i])
    i++;
};

console.log('---- do while loop ----');

 /* local variable definition */
   let a = 10;

   /* do loop execution */
   do {
  
      a = a + 1;
      console.log(a)
   }while( a < 20 )
   
// For Each - return and chain won't work
let array = [1,5,6,7,3,4,2,9];

let newArr =[];
array.forEach((ele, idx, arr) => {
    newArr[idx] = ele * ele;
}) 

// console.log(newArr);

let array1 = [1,5,6,7,3,4,2,9];

let newArr1 =[];
let res = array1.map((ele, idx, arr) => {
    return ele * ele;
}).reverse() 

console.log(res);

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// For in Loop
// The JavaScript for in statement loops through the properties of an Object:

// For Each - return and chain won't work

//Working on the Keys
let array = [1,5,6,7,3,4,2,9];

let object = {
    name: 'ranjith',
    age: 26,
    address: 'ariyalur',
    pincode: 676767
};

console.log('--------For in --------');
for(let ele in array){
    console.log(ele + '--' + array[ele]);
}

for(let ele in object){
    console.log(ele + '--' + object[ele]);
}

console.log('--------For Of --------');

//Working on the elements and won't work on obj
for(let ele of array){
    console.log(ele);
}
