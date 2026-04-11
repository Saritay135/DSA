# Title: Two Sum II - Input Array Is Sorted
# Submission ID: 1974942215
# Status: Accepted
# Date: April 10, 2026 at 10:43:23 PM CDT

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    let i = 0;
    let j = n-1;
   while(i<j){
      if(nums[i]+nums[j]=== target){
        return [i+1, j+1];
      }else if(nums[i]+ nums[j]> target){
        j--;
      }else{
        i++
      }
    }
};