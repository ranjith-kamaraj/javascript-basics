//These are examples for Higher Orders Functions

/**
  ---- Map ----
  1. Transform logic (whole array)
 */

let arr = [3, 4, 6,7, 2, 8];

let op1 = arr.map((ele) => ele * 2);
let op2 = arr.map((ele)=> {
    return ele.toString(2);
});

console.log(arr, op1, op2);
