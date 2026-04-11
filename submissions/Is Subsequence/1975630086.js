# Title: Is Subsequence
# Submission ID: 1975630086
# Status: Accepted
# Date: April 11, 2026 at 12:17:13 PM CDT

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