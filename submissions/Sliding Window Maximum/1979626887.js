# Title: Sliding Window Maximum
# Submission ID: 1979626887
# Status: Output Limit Exceeded
# Date: April 15, 2026 at 07:41:58 PM CDT

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
        console.log(q);
    if(j >= k-1){
        res.push(q[0]);
        if(arr[i] == q[0])  q.shift();
        ++i;
      }
    ++j;
    }
    return res;
};