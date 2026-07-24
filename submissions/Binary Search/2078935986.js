# Title: Binary Search
# Submission ID: 2078935986
# Status: Wrong Answer
# Date: July 23, 2026 at 07:17:55 PM CDT

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let right = nums.length - 1;
    let left = 0;
    while(right>left){
        let middle = Math.floor((left+right)/2);
        if(nums[middle] === target){
            return middle;
        } else if(nums[middle]>target){
            right = middle-1;
        } else {
            left = middle +1
        }
    }
    return -1;
};