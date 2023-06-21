// Prblem: https://www.hackerrank.com/challenges/insertionsort2/

function insertionSort2(n, arr) {

    let newArr = arr;
    for (let index = 1; index < n; index += 1) {
        let count = index
        while (newArr[count] < newArr[count - 1]) {
            let v1 = newArr[count]
            newArr[count] = newArr[count - 1]
            newArr[count - 1] = v1
            count -= 1
        }
        console.log(printValues(newArr))
    };
};

// Helper Function
function printValues(arr) {
    let values = ''

    arr.forEach((element, index) => {
        if (index !== arr.length - 1) {
            values += element + ' '
        } else {
            values += element
        }
    });
    return values
}

// Done