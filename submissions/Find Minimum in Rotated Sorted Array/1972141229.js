# Title: Find Minimum in Rotated Sorted Array
# Submission ID: 1972141229
# Status: Wrong Answer
# Date: April 7, 2026 at 10:09:07 PM CDT

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l<=r){
        if(nums[l]<=nums[r]){
            return nums[l];
        }
        let m = l + Math.floor((r-l)/2);
        if(nums[m]<nums[m-1]){
            r=m-1;
        } else{
            l=m+1;
        }
    }
};