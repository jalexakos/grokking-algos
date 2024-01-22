// 4.1

function sum(arr: Array<number>){
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
    else if (arr[midPoint] > target) return binarySearchRecursive(arr.slice(0, midPoint - 1), target);
    else return binarySearchRecursive(arr.slice(midPoint + 1), target);
}

binarySearchRecursive([ 0, 3, 6, 9, 12, 15, 18 ], 15) // 5

// this solution doesn't work because we get the wrong index, as we're slicing the array. Thus, we're getting the right index on the subarray, but not the actual array.