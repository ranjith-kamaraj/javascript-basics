//Logic = Aligning cards while playing

/*
Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

Insertion sort works similarly as we sort cards in our hand in a card game.

We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.

A similar approach is used by insertion sort.
*/

let arr = [3, 2, 8, 5, 63, 54];


function insertionSort(arr){
    size = arr.length;
    
    for(let i = 1; i < size; i++){
        value = arr[i]; //8
        index = i;
        
        while(index > 0 && value < arr[index - 1]){
            arr[index] = arr[index - 1];
            --index;
        };
        
        arr[index] = value;
    };
    
    console.log(arr);
};

insertionSort(arr);

//[ 63, 54, 8, 5, 3, 2 ]

/*
Insertion Sort Complexity
Time Complexity	 
Best	O(n)
Worst	O(n2)
Average	O(n2)
Space Complexity	O(1)
Stability	Yes

*/




