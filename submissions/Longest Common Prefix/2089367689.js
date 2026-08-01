# Title: Longest Common Prefix
# Submission ID: 2089367689
# Status: Accepted
# Date: July 31, 2026 at 08:36:25 PM CDT

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   let x=0;
   while(x<strs[0].length){
    ch = strs[0][x];
    for(let i=0; i<strs.length; i++){
        if(ch!=strs[i][x] || x== strs[i].length){
            return strs[i].substring(0,x);
        }
    }
    x++;
   }
   return strs[0];
};