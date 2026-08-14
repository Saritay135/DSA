# Title: Subsets
# Submission ID: 2106099743
# Status: Accepted
# Date: August 13, 2026 at 10:36:02 PM CDT

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let backtrack = (path,start) => {
        result.push([...path]);

        for(let i=start;i<nums.length; i++){
            path.push(nums[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([],0);
    return result;
};