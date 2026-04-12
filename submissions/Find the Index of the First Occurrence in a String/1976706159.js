# Title: Find the Index of the First Occurrence in a String
# Submission ID: 1976706159
# Status: Accepted
# Date: April 12, 2026 at 02:23:10 PM CDT

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   let m = haystack.length;
   let n = needle.length;
   for(let i=0; i<=m-n; i++){
    let j=0;
    for(j=0; j<n; j++){
       if(haystack[i+j]!= needle[j]){
        break;
       }
    }
    if(j===n) return (i);
   } 
   return -1;
};