// Problem : https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true


function squares(a, b) {
    // Write your code here
    let m = parseInt(Math.sqrt(a))
    let n = parseInt(Math.sqrt(b))
    let contador = 0

    if ((m * m) === a) contador++;
    if ((n - m) >= 0) return (n - m) + contador;
    return 0 + contador
}

// Done