# Title: Longest Common Prefix
# Submission ID: 1954120650
# Status: Wrong Answer
# Date: March 20, 2026 at 12:01:06 PM CDT

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     let ch = strs[0];
     let res = ""
     for(let i=1; i<strs.length;i++){
        res = "";
        for(let j=0; j<strs[i].length; j++){
            if((ch.length)>j && strs[i][j] === ch[j]){
                res = res + ch[j];
            }
        }
        ch = res;
     }
    
  return ch;;
};