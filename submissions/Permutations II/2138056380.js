# Title: Permutations II
# Submission ID: 2138056380
# Status: Accepted
# Date: September 10, 2026 at 09:14:52 PM CDT

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result =[];
    nums.sort((a,b) =>(a-b));
    
     let backtrack = function(path, arr) {
        if(path.length === nums.length){
        result.push([...path]);
        return;
    }
       for(let i=0; i<arr.length; i++){
        if(i>0 && arr[i]===arr[i-1]) continue;

        path.push(arr[i]);
        backtrack(path, [...arr.slice(0,i), ...arr.slice(i+1)]);
        path.pop();
       }
     }
     backtrack([],nums);
     return result;
};