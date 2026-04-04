# Title: Find Peak Element
# Submission ID: 1968219528
# Status: Accepted
# Date: April 3, 2026 at 10:47:58 PM CDT

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        let m = l+ Math.floor((r-l)/2);
        if(nums[m]<nums[m+1]){
            l = m+1;
        }else{
            r=m;
        }
    }
    return r;
};