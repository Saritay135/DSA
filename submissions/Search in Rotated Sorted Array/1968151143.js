# Title: Search in Rotated Sorted Array
# Submission ID: 1968151143
# Status: Accepted
# Date: April 3, 2026 at 07:00:02 PM CDT

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length-1;
    let l=0;
    let r= n;
    while(l<=r){
       let  m = l+ Math.floor((r-l)/2);
        if(target === nums[m]) return m;
        else if(nums[m] >= nums[l]){
            if(nums[l]>target || target > nums[m]){
                l=m+1;
            }else {
               r = m-1;
            }
        } else if(nums[m]<nums[r]){
            if(target> nums[r] || target< nums[m]){
                r = m-1;
            }else {
                l = m+1;
            }
        }
    }
   return -1;
};