//Reverse
// let arr = [3, 4, 2, 51, 55, 90, 44];

// let value = [];
// let length = arr.length;

// for(let i = 0; i < length; i++){
//     value.push(arr[arr.length - (i + 1)])
// }

// // console.log(length)
// console.log(value)

// let str = "Hi Ranjith";

// let val = "";

// for(let i = 0; i < str.length; i++){
//     val += str[str.length - (i + 1)];
// }

// console.log(val)

//Max SubArry - https://leetcode.com/problems/maximum-subarray/
// let nums = [-2,1,-3,4,-1,2,1, -5, 4];
let nums = [5,4,-1,7,8]

let maxSub = nums[0];
let currSum = 0;

for(let num of nums){
    if(currSum < 0){
        currSum = 0;
    }
    else {
       currSum += num;
       maxSub = Math.max(maxSub, currSum) 
    }
}

console.log(maxSub)

/**
 * @param {number[]} nums
 * @return {number}
 */
 let maxSubArray = function(nums) {
    let max1 = nums[0];
    let max2 = nums[0];
    
    for(let i=1; i<nums.length; i++){
        max1 = Math.max(nums[i] , max1 +nums[i])
        console.log(max1)
        
        if(max1 > max2){
            max2 = max1;
        }
    }
    return max2;
};



// Source: https://leetcode.com/problems/3sum/
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

 var threeSum = function(nums) {
    
    let leng = nums.length;
    let arr = [];

    for(let i = 0; i < leng - 2; i++){
        for(let j = i + 1; j < leng - 1; j++){
            for(let k = j + 1; k < leng; k++){
           
                if(nums[i] + nums[j] + nums[k] === 0){
                    
                    let value = [nums[i], nums[j], nums[k]];
                    arr.push(value)
                }
            
           }
         }
    }
    
    return arr;
};

//Number Sorting
let nums = [-2,1,-3,4,-1,2,1,-5,4];
let res = nums.sort((a, b) => a - b);

console.log(res)


let arr = [3, 11, 4, 66, 33, 22,77, 9, 88];

//Reverse
let leng = arr.length;
let newArr = [];

while(leng > 0){
    newArr.push(arr[leng - 1]);
    --leng;
};
console.log(newArr);