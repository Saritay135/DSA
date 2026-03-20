# Title: Longest Common Prefix
# Submission ID: 1954276628
# Status: Accepted
# Date: March 20, 2026 at 03:22:56 PM CDT

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     let x =0;
     while(x<strs[0].length){
        ch = strs[0][x];
        for(let i = 0; i< strs.length; i++){
            if(ch != strs[i][x] || x == strs[i].length){
                return strs[0].substring(0,x);
            }
        }
        ++x;
     }
     return strs[0];
};