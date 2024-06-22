
/* Implement Binary Search Algorithm with an Unsorted Array */

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    };
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
// Complexity: O(n*log n)

const binarySearch = (arr, target) => {
    const sortedArr = quickSort(arr)
    let first = 0;
    let last = sortedArr.length - 1;

    while (first <= last) {
        let middle = Math.round((first + last) / 2);

        if (sortedArr[middle] === target)
            return middle;
        else if (sortedArr[middle] > target) {
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    };
    return -1;
};

const arr = [-2, 998, 76, 5, 34, 345, 12, -5, 387, 65, 456, 999, 4];
console.log(quickSort(arr));
console.log(binarySearch(arr, 998));