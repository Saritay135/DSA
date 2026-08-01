# Title: Minimum Size Subarray Sum
# Submission ID: 2090178408
# Status: Time Limit Exceeded
# Date: August 1, 2026 at 10:19:27 AM CDT

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let r =0; 
    let l =0;
    
    min1 = 0;
    let finalMin =Infinity;
    while(r<nums.length){
        let sum =0;
        for(let i=l; i<=r;i++){
            sum+= nums[i];
        }
        if(sum<target){
            r = r+1;
        }else{
            min1 = r-l+1;
            finalMin = Math.min(min1, finalMin);
            l=l+1;

        }
        
    }
return finalMin === Infinity ? 0 : finalMin;
};