# Title: Daily Temperatures
# Submission ID: 1966451905
# Status: Accepted
# Date: April 1, 2026 at 11:46:33 PM CDT

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