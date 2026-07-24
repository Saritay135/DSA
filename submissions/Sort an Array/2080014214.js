# Title: Sort an Array
# Submission ID: 2080014214
# Status: Accepted
# Date: July 24, 2026 at 02:18:15 PM CDT

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length<=1) return nums;
  let mid = nums.length/2;
  let left = sortArray(nums.slice(0,mid));
  let right = sortArray(nums.slice(mid));
  return mergeSort(left,right)
};

function mergeSort(left, right) {
    let res=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
      if(left[i]<=right[j]){
        res.push(left[i]);
        i++
      } else if(left[i]>right[j]){
        res.push(right[j]);
        j++;
      }
    }

    return [...res, ...left.slice(i),...right.slice(j)];

}

