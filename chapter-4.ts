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

  