# Title: Next Greater Element I
# Submission ID: 1966294800
# Status: Output Limit Exceeded
# Date: April 1, 2026 at 05:27:49 PM CDT

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];
    let n = nums2.length;
    map[nums2[n-1]] = -1; 
    stack.push(nums2[n-1]);
    for(let i=n-2; i>=0; i--){
      console.log("i:", i, "nums2[i]:", nums2[i], "stack:", stack, "map:", map);
       let top = stack[stack.length-1];
        if(nums2[i]< top){
            stack.push(nums2[i]);
            map[nums2[i]] = top;
        }else{
            while(stack.length){
                if(nums2[i]>stack[stack.length-1]){
                    stack.pop();
                }else{
                    map[nums2[i]] = stack[stack.length-1];
                    stack.push(nums2[i]);
                    break;
                }
            }
            if(!stack.length){
                map[nums2[i]]= -1;
                stack.push(nums2[i]);
            }
        }
    }
    let ans =[];
    for(let i=0; i<nums1.length; i++){
        ans.push(map[nums1[i]]);
    }
    return ans;
};