# Title: Minimum Size Subarray Sum
# Submission ID: 2090659521
# Status: Accepted
# Date: August 1, 2026 at 09:25:01 PM CDT

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let r =0; 
    let left =0;
    min1 = 0;
    let finalMin =Infinity;
    let sum=0;
    for(let r=0;r<nums.length; r++){
        sum = sum + nums[r];
        while(sum>= target){
            finalMin = Math.min((finalMin),(r -left +1));
            sum = sum - nums[left];
            left = left+1;
        }
    }
    
return finalMin === Infinity ? 0 : finalMin;
};