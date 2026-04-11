# Title: Two Sum
# Submission ID: 1974932664
# Status: Accepted
# Date: April 10, 2026 at 10:20:49 PM CDT

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let map = {};
    for(let i=0; i<arr.length; i++){
        map[arr[i]]= i;
    }
    for(let i=0; i< arr.length; i++){
        if(map[target-arr[i]] && map[target-arr[i]] != i){
            return [i,map[target-arr[i]]];
        }
    }
};