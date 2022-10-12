//Max and Min Value

var arr = [1000, 11, 445, 1, 330, 3000, 400, 50000, 1999];

let max= arr[0];
let min = arr[0];
for(let i =0 ;  i< arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    
    if(min > arr[i]){
        min = arr[i]
    }
    
}
console.log(max, min);


//Reverse the string or array
let arr = 'Ranjith kamaraj';
 
let leng = arr.length;

let arr1=[];
let str = "";
while(leng > 0){
  /*   arr1.push(arr[leng - 1]) */
  str+=arr[leng - 1];
    console.log('call')
    --leng;
}

console.log(str);


//Prime Numbers
let lowerNumber = 1, higherNumber = 100;

for(let i = lowerNumber; i < higherNumber; i++ ){
    let flag = 0;

    for(let j = 2; j < i; j++ ){
    
        if(i % j == 0){
            flag = 1
            break;
        }
    }
    
     if(i > 1 && flag == 0){
           console.log(i)
    }
}

//Flatten the array