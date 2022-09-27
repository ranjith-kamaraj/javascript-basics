//Binary Search

let arr = [1, 2, 3, 7, 8, 9];

let sortArr = arr.sort();
let k = 2;

let start = 0, end = arr.length -1;;
function binSearch(){
   
   while(start <= end){
       let mid = Math.ceil((start + end) / 2);
       
       console.log('Calling -- ' + arr[mid])
       
       if(arr[mid] == k){
           console.log('Value Found')
           return 1
       }
       
       if(arr[mid] < k){
           start = mid + 1
       }
       else if(arr[mid] > k){
           end = mid - 1
       }
      
   }
   return 0;
}

console.log(binSearch(sortArr));


