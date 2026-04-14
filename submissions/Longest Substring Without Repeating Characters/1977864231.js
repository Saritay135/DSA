# Title: Longest Substring Without Repeating Characters
# Submission ID: 1977864231
# Status: Accepted
# Date: April 13, 2026 at 10:32:33 PM CDT

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=j=0;
    let map = {};
    let maxWS = 0;
    for(j=0; j<s.length; j++){
        if(map[s[j]]!= undefined && map[s[j]]>=i){
            i = map[s[j]]+1;
        }
        map[s[j]] = j;
        currWS =j-i+1;
        maxWS = Math.max(maxWS, currWS);
    }
    return maxWS;
};