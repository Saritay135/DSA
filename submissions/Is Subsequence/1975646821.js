# Title: Is Subsequence
# Submission ID: 1975646821
# Status: Accepted
# Date: April 11, 2026 at 12:34:41 PM CDT

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(j < t.length){
        if(s[i]===t[j]){
            i++;
        }
        j++;
    }
    if(i === s.length) return true;
    return false;
};