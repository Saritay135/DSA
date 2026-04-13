# Title: Container With Most Water
# Submission ID: 1976849589
# Status: Accepted
# Date: April 12, 2026 at 08:40:51 PM CDT

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i =0;
    let j = height.length-1;
    let maxValue = 0;
    while(i<j){
        let max = 0;
      if(height[i]>height[j]){
       max = height[j]*(j-i);
       j--;
      }else{
        max = height[i]* (j-i);
        i++;
      }
      maxValue = Math.max(maxValue,max);
    }
    return maxValue;
};