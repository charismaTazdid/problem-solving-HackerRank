// Problem: Problem: https://www.hackerrank.com/challenges/insertionsort1

function insertionSort1(n, arr) {
    let a = arr.pop();
    arr = arr.map(String);
    
    for (let i = arr.length - 1; i >= 0; i--) {
      if (parseInt(arr[i]) > a) {
        arr.splice(i, 0, arr[i]);
        console.log(arr.join(' '));
        arr.splice(i, 1);
        
        if (i === 0 && parseInt(arr[i]) > a) {
          arr.splice(i, 0, String(a));
          console.log(arr.join(' '));
        }
      } else {
        arr.splice(i + 1, 0, String(a));
        console.log(arr.join(' '));
        break;
      }
    }
  }
  