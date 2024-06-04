// Problem Number 4 on leedCode

 var findMedianSortedArrays = function (nums1, nums2) {
    const joined = nums1.concat(nums2);
    joined.sort(function (a, b) {
        return a - b
    });
    const even = joined.length / 2, 
        isOdd = joined.length % 2;

    if (isOdd > 0) {
        return joined[Math.floor(joined.length / 2)];
    } else {
        return (joined[even] + joined[even - 1]) / 2;
    };
};


//  Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.