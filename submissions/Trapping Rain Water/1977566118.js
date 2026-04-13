# Title: Trapping Rain Water
# Submission ID: 1977566118
# Status: Accepted
# Date: April 13, 2026 at 12:29:01 PM CDT

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let ans =0;
    let maxL = [];
    maxL[0] = [height[0]];
    let maxR = [];
     maxR[n-1]= height[n-1];
    for(let i=1; i<n; i++){
       maxL[i] = Math.max(maxL[i-1],height[i]);
       maxR[n-1-i]= Math.max(maxR[n-i],height[n-1-i]);
      
    }
    
    for(let i=0; i<n; i++){
        let waterTrapped = Math.min(maxR[i],maxL[i]) - height[i]
        ans = ans + (waterTrapped<0?0: waterTrapped);
    }
    return ans;
};