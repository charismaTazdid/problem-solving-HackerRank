
//Porblem: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true


function migratoryBirds(arr) {
    // Write your code here

    let newArr = {}
    const uniqueVal = [... new Set(arr)]
    uniqueVal.forEach(elem => {
        const filterVal = arr.filter(val => val == elem)       
        const totalVal = filterVal.length
        newArr[elem] = totalVal
    })

    let result = Object.entries(newArr).sort(([,a], [,b]) => b-a)
    let final = result[0][0]
    return final
}