//Imperative
// Describes the control flow, ussually more verbose(தேவைக்கு அதிகமான சொற்கள் உடைய)


function findLess10(arr){
   let res = [];

   for(let i =0; i< arr.length; i++){
       if(arr[i] < 10){
           res.push(arr[i]);
       }
   }

   return res;
};


let arr = [1,30,77,66,5,3,2];
console.log(findLess10(arr))

//Declrative
// Expresses the logic, mostly abstracts away control flow

let result = arr.filter((ele) => ele > 10);
console.log(result);