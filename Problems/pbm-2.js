//Combine Values

let arr = [2, 2, 3, 4,4,4,5,6,6];

let sortArr = arr.sort();
console.log(sortArr);
let obj = {};

for(let i = 0; i < sortArr.length; i++){
   let obj1 =  arr.filter(ele => ele == sortArr[i]);
    obj[sortArr[i]] = obj1.length;
};

console.log(obj);

//{ '2': 2, '3': 1, '4': 3, '5': 1, '6': 2 }


//Remove Duplicates
let arr = [2, 2, 3, 4, 4, 4, 5, 6, 6];

let newArr = [];

for(let i = 0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
}

console.log(newArr)


//Take Unique values 
let arr = [2, 2, 3, 4, 4, 4, 5, 6, 6, 7];

let newArr = [];

for(let i = 0; i < arr.length; i++){
    
    let arr1 = arr.filter(ele => ele == arr[i])
    
  if(arr1.length == 1){
      newArr.push(...arr1)
  }
    
}

console.log(newArr)



//Find factors of value
let n = 25;

for(let i = 0; i<= n; i++){
    
    if(n % i == 0){
        console.log(i);
    }
}
console.log('------Here--------')
for(let i = 0; i<= Math.sqrt(n); i++){//100
    
    if(n % i == 0){
         console.log('call' + i)
        if(n/i == i){
               console.log(i); 
        }
        else {
               console.log(n/i, i);
        }
    }
}


