
// Problem : https://www.hackerrank.com/challenges/s10-geometric-distribution-2/problem?isFullScreen=true

function processData(input) {
  
    let p = (1 / 3);
    let n = 5;
    let q = (2 / 3);
    let result = 0;
    for(let i = 1; i<= n; i++)     
     result += Math.pow(q,i-1) * p;
           
    console.log(result.toFixed(3));
 }
 