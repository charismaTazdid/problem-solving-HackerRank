// Problem : https://leetcode.com/problems/3sum-closest/

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const currSum = nums[i] + nums[j] + nums[k];
            if (currSum === target) {
                return currSum;
            }
            if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
                closestSum = currSum;
            }
            if (currSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return closestSum;
}