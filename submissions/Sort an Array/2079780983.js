# Title: Sort an Array
# Submission ID: 2079780983
# Status: Time Limit Exceeded
# Date: July 24, 2026 at 11:02:07 AM CDT

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   let n = nums.length;
   for(let i=0; i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(nums[i]>nums[j]){
            let temp = nums[i];
            nums[i]= nums[j];
            nums[j]=temp;
        }
    }
   }
   return nums;
};

