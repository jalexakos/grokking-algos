// 4.1

function sum(arr: Array<number>): number{
    if (arr.length === 0) {
        return 0;
      }
      
    if (arr.length === 1) {
        return arr[0];
      }
      
    return arr[0] + sum(arr.slice(1,arr.length));
    }
    
  sum([2,4,6])

// 4.2

function countList(arr:Array<any>): number {
    if (arr.length === 0){
        return 0;
    }

    if (arr.length === 1){
        return 1;
    }

    return 1 + countList(arr.slice(1, arr.length));
}   

countList([1,2,3,4,5]); // works

// 4.3

function maxNum(arr: Array<number>): number{
    if (arr.length === 0){
        return 0;
    }
    
    let max = arr[0];
    for (let num in arr){
        if (arr[num] > max){
            max = arr[num];
        }
    }
    
    return max;
}

maxNum([ 0, 3, 6, 9, 12, 15, 18 ]); // works

// 4.4
function binarySearchRecursive(arr: Array<number>, target: number): number {
    const midPoint = Math.floor((arr.length - 1)/2);
    if (arr[midPoint] === target) return midPoint;
    else if (arr.length === 1) return -1;
    else if (arr[midPoint] > target) return binarySearchRecursive(arr.slice(0, midPoint), target);
    else return (binarySearchRecursive(arr.slice(midPoint + 1), target) + (midPoint + 1));
}

console.log(binarySearchRecursive([ 0, 3, 6, 9, 12, 15, 18 ], 2)) // -1
console.log(binarySearchRecursive([ 0, 3, 6, 9, 12, 15, 18 ], 6)) // 2
console.log(binarySearchRecursive([ 0, 3, 6, 9, 12, 15, 18 ], 15)) // 5
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // 5

// this solution doesn't work because we get the wrong index, as we're slicing the array. Thus, we're getting the right index on the subarray, but not the actual array.
// UPDATE: Got the solution to work by passing the midpoint + 1 to the answer for a right sided slice. However, it still
// had issues, which I had chatGPT debug for me. I was slicing incorrectly on my left sided slice - I was passing 
// midpoint - 1 as the second value in slice, when I should pass midpoint, as slice is non-inclusive of the second value
// (thus, it would not include the midpoint value in the new index).

// 4.5

// It will take O(n) time to print each element in an array.

// 4.6

// It will take O(n) time to double the value of each element in an array.

// 4.7

// It will take O(1) time to double the value of the first element in an array.

// 4.8

// Creating a multiplication table (where each element in the array is multiplied by the other elements in the array) will take O(n)^2 time.