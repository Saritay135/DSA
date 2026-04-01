# Title: Next Greater Element I
# Submission ID: 1966304523
# Status: Accepted
# Date: April 1, 2026 at 06:01:10 PM CDT

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