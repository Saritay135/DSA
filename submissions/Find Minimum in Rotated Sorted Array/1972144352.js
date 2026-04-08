# Title: Find Minimum in Rotated Sorted Array
# Submission ID: 1972144352
# Status: Accepted
# Date: April 7, 2026 at 10:14:54 PM CDT

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
            return nums[m];
        }
        if(nums[l]>nums[m]){
            r=m-1;
        } else{
            l=m+1;
        }
    }
};