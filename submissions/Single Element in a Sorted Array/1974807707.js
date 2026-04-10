# Title: Single Element in a Sorted Array
# Submission ID: 1974807707
# Status: Accepted
# Date: April 10, 2026 at 03:27:37 PM CDT

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0; 
    let r = nums.length-1;
    while(l<=r){
        let m = l+ Math.floor((r-l)/2);
        if(nums[m-1]!= nums[m] && nums[m+1] != nums[m]){
            r=m;
            break;
        }
        if(m%2===0){
          if(nums[m-1]=== nums[m]){
            r=m-1;    
        }else if(nums[m+1] === nums[m]){
            l=m+1;
        }
        }else if(m%2 != 0){
           if(nums[m-1]=== nums[m]){
            l=m+1;    
        }else if(nums[m+1] === nums[m]){
            r=m-1;
        } 
        }
    }
    return nums[r];
};