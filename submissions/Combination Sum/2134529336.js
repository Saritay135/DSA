# Title: Combination Sum
# Submission ID: 2134529336
# Status: Accepted
# Date: September 7, 2026 at 09:30:08 PM CDT

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    let result = [];
    let backtrack = (remainingSum, path, start)=>{
        if(remainingSum===0) result.push([...path]);
        if(remainingSum<=0) return;
        for(let i=start; i<arr.length;i++){
            path.push(arr[i]);
            backtrack(remainingSum-arr[i],path,i);
            path.pop();
        }
    }
    backtrack(target,[],0);
    return result;
};