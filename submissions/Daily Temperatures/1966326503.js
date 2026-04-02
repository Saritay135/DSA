# Title: Daily Temperatures
# Submission ID: 1966326503
# Status: Time Limit Exceeded
# Date: April 1, 2026 at 07:18:47 PM CDT

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
 let ans = [];
 let n = temperatures.length;
 for(let i=0; i<n; i++){
    let count=0;
     for(let j=i+1; j<n; j++){
       if(temperatures[i]<temperatures[j]){
        count = j-i;
        break;
       }
     }
     ans.push(count);
   }
   return ans;
 };