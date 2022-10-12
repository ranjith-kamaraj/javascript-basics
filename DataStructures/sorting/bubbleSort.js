// Bubble sort is a sorting algorithm that compares two adjacent elements 
// and swaps them until they are in the intended order.

// Just like the movement of air bubbles in the water that rise up 
// to the surface, each element of the array move to the end in each iteration. 
// Therefore, it is called a bubble sort.

let arr = [3, 11, 4, 66, 33, 22,77, 9, 88];

function bubbleSort(arr){
    size = arr.length;
    
    for(let i =0; i < size - 1; i++){
        for(let j = 0; j < size - 1 - i; j++){
            
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
            
        }
    };
    console.log(arr);
};

bubbleSort(arr);

/*
Bubble Sort Complexity

Time Complexity	 
Best	O(n)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
Stability	Yes
*/



