# Title: Sort an Array
# Submission ID: 2079840324
# Status: Time Limit Exceeded
# Date: July 24, 2026 at 11:49:31 AM CDT

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  let n = nums.length;
  for(let i=1; i<n ;i++){
    let curr= nums[i];
    let prev = i-1;
    while(nums[prev]>curr && prev >=0){
        nums[prev+1]= nums[prev];
        nums[prev]= curr;
        prev--;
    }
  }
   return nums;
};

