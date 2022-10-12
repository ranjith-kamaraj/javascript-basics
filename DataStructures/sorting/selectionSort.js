//Selection Sort
// Selection sort is a sorting algorithm that selects the smallest element from an 
// unsorted list in each iteration and places that element at the beginning 
// of the unsorted list.

let arr = [3, 11, 4, 66, 33, 22,77, 9, 88];

function selectionSort(arr){
    size = arr.length;
    
    for(let i = 0; i < size - 1; i++){
        for(j = i + 1; j < size; j++){
            
            //Asc Order
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
            
            //Dec Order
            if(arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    
    console.log(arr);
};

selectionSort(arr);

//Output: 
//[ 3, 4, 9, 11, 22, 33, 66, 77, 88 ]
// [ 88, 77, 66, 33, 22, 11, 9, 4, 3 ]

/*Time Complexity	 
Best	O(n2)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
Stability	No
*/
