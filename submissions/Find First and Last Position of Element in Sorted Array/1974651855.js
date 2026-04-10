# Title: Find First and Last Position of Element in Sorted Array
# Submission ID: 1974651855
# Status: Accepted
# Date: April 10, 2026 at 11:57:56 AM CDT

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0;
     let r = nums.length-1;
     let ans = [-1,-1];
     while(l<=r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]<target){
            l = m+1;
        }else{
            r=m-1;
        }
       if(nums[l]=== target) ans[0]=l;
     }
     l = 0; 
     r = nums.length-1;
     while(l<=r){
        let m = l + Math.ceil((r-l)/2);
        if(nums[m]>target){
            r=m-1;
        }else{
            l = m+1;
        }
       if(nums[r]=== target) ans[1]=r;
     }
     return ans;
};