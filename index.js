//These are examples for Higher Orders Functions

/**
  ---- Map ----
  1. Transform logic (whole array)
  2. map() method: It applies a given function on all the elements of the array and returns
   the updated array. It is the simpler and shorter code instead of a loop. The map is 
   similar to the following code:
 */

let arr = [3, 4, 6, 7, 2, 8];

let op1 = arr.map((ele) => ele * 2);
let op2 = arr.map((ele) => {
	return ele.toString(2);
});

//   console.log(arr, op1, op2);

/*
 ---- Filter ----
  1. Used to filter - based on logic
  2. filter() method: It filters the elements of the array that return false for the applied
   condition and returns the array which contains elements that satisfy the applied condition.
	It is a simpler and shorter code instead of the below code using a loop.
  
*/
let arr1 = [3, 4, 6, 7, 2, 5, 8];
let op3 = arr1.filter(ele => ele % 2);
let op4 = arr1.filter((ele) => ele % 2 === 0);
let op5 = arr1.filter((ele) => {
	return ele > 4
});

// console.log(arr1, op3, op4, op5);

/*
 ---- Reduce ----
  1. reduce() method: It reduces all the elements of the array to a single value by repeatedly
applying a function. It is an alternative of using a loop and updating the result 
for every scanned element. Reduce can be used in place of the following code.
  
*/

let arr3 = [3, 4, 6, 7, 2, 5, 8];

let op6 = arr3.reduce((acc, curr) => {
	return acc + curr;
});
let op7 = arr3.reduce((max, curr) => {
	if (curr > max) {
		max = curr
	}
	return max;
}, 0);

// console.log(arr3, op6, op7);

/*  ---- Find ---- 
  1. Return particular object
  2. Which return first element 

  The find() method is used to find all the descendant elements of the selected element. It finds 
  the element in the DOM tree by traversing through the root to leaf.
*/

//Other Problem
let employees = [{ "name": "Ram", "email": "ram@gmail.com", "age": 23 },
{ "name": "Shyam", "email": "shyam23@gmail.com", "age": 28 },
{ "name": "John", "email": "john@gmail.com", "age": 33 },
{ "name": "Ram", "email": "ram@gmail.com", "age": 33 },
{ "name": "Raj", "email": "raj@gmail.com", "age": 33 },
{ "name": "Bob", "email": "bob32@gmail.com", "age": 23 }];

let op8 = employees.map(ele => ele.name + ' '+ ele.email);
// console.log(op8);

let op9 = employees.reduce((acc, curr) => {
	if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1;
	}
	else{
		acc[curr.age] = 1;
	}
	return acc;
}, {});
// console.log(op9);

let op10 = employees.filter(ele => ele.age == 23).map(ele => ele.name);
// console.log(op10);

let op11 = employees.find(ele => ele.age == 23);
console.log(op11);









