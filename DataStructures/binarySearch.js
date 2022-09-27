/*
   --- Linear Search ---
   Big-O = O(n)
*/

console.log('Linear Search')
function linearSearch(arr, target) {

  let idx = arr.length;

  for (let i = 0; i < idx; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([-4, -2, 1, 3, 5, 6, 7, 8], 5));//4
console.log(linearSearch([-4, -2, 1, 3, 5, 6, 7, 8, 12], 100));//3



/*
   --- Binary Search ---
   1. Only will work in sorted array

   Big-O = O(logn)
   For array of '8' values, BS will take only 3 iterations
*/
console.log('Binary Search')
function binarySearch(arr, target) {

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middileIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middileIndex] == target) {
      return middileIndex;
    }

    if (target > arr[middileIndex]) {
      leftIndex = middileIndex + 1;
    }
    else {
      rightIndex = middileIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([-4, -2, 1, 3, 5, 6, 7, 8], 5));//4
console.log(binarySearch([-4, -2, 1, 3, 5, 6, 7, 8, 12], 3));//3

