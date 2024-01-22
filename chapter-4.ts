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