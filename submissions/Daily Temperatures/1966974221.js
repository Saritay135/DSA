# Title: Daily Temperatures
# Submission ID: 1966974221
# Status: Accepted
# Date: April 2, 2026 at 11:27:55 AM CDT

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
 let ans = [];
 let stack = [];
 let n = temperatures.length;
 ans[n-1] = 0;
 stack.push(n-1);
 for(let i=n-2; i>=0; i--){
   while(stack.length){ 
     let top = stack[stack.length-1]
    if(temperatures[i] < temperatures[top]){
      ans[i] = top-i;
      stack.push(i);
      break;
    }else{
        stack.pop();
    }
  }
   if(!stack.length){ 
        ans[i] = 0;
        stack.push(i);
    }
 }
   return ans;
};