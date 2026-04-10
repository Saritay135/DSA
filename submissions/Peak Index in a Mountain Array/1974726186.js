# Title: Peak Index in a Mountain Array
# Submission ID: 1974726186
# Status: Time Limit Exceeded
# Date: April 10, 2026 at 01:19:56 PM CDT

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l=0;
    let r= arr.length-1;
    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        if(arr[m-1]<arr[m] && arr[m]>arr[m+1]){
            l=m;
            break;
        }
        else if(arr[m+1]<arr[m] && arr[m]<arr[m-1]){
            r= m-1;
        }else if(arr[m-1]<arr[m] && arr[m]<arr[m+1]){
            l= m+1
        }
    }
    return l;
};