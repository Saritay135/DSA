# Title: Sliding Window Maximum
# Submission ID: 1979626964
# Status: Accepted
# Date: April 15, 2026 at 07:42:14 PM CDT

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {
    let res = [];
    let q = [];
    let i=j=0;

    while(j<arr.length){

        while(q.length && arr[j]>q[q.length-1]){  q.pop() }
        q.push(arr[j]);
        
    if(j >= k-1){
        res.push(q[0]);
        if(arr[i] == q[0])  q.shift();
        ++i;
      }
    ++j;
    }
    return res;
};