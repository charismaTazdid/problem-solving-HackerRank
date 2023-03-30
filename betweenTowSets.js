// Problem: https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    const arr = [];
    while(arr.length < b[0]) arr.push(arr.length + 1)
    
    let factors = 0;
    arr.forEach((e) => {
      const cond1 = a.every((el) => e % el === 0);
      const cond2 = b.every((el) => el % e === 0);
      if(cond1 && cond2) factors++;
    })
    
    return factors;
}