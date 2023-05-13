// Problem: https://www.hackerrank.com/challenges/halloween-sale/

function howManyGames(p, d, m, s) {
    let count = 0
    while (s >= p) {
      s -= p
      p = Math.max(m, p - d)
      count++
    }
    return count
  }