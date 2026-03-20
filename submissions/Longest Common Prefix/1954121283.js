# Title: Longest Common Prefix
# Submission ID: 1954121283
# Status: Accepted
# Date: March 20, 2026 at 12:01:46 PM CDT

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
            }else {
                break;
            }
        }
        ch = res;
     }
    
  return ch;;
};