# Title: Find K Closest Elements
# Submission ID: 1974904159
# Status: Wrong Answer
# Date: April 10, 2026 at 08:57:06 PM CDT

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        let m = l + Math.floor((r-l)/2);
       if(Math.abs(arr[m+k]-x)< Math.abs(arr[m]-x)){
           l = m+1;
       } else{
        r = m;
       }
    }
    return arr.slice(l,l+k);
};