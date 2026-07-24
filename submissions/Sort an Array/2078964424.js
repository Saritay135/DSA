# Title: Sort an Array
# Submission ID: 2078964424
# Status: Time Limit Exceeded
# Date: July 23, 2026 at 08:43:45 PM CDT

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length;
    for(let i=0; i<n;i++){
        let isSwapped = false;
        for(let j=0; j<n-i-1;j++){
           if(nums[j]>nums[j+1]){
            [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
            isSwapped = true;
           }
        } 
        if(!isSwapped) break;
    }
    return nums;
};

