# Title: Permutations
# Submission ID: 2114438874
# Status: Accepted
# Date: August 20, 2026 at 03:39:38 PM CDT

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result =[];
    let n = nums.length;

    let backtrack = (path) =>{
      if(path.length===n){
        result.push([...path]);
      }
      for(let i=0; i<n;i++){
        if(!path.includes(nums[i])){
            path.push(nums[i]);
            backtrack(path);
            path.pop();
        }
      }
    }
    backtrack([]);
    return result;
};