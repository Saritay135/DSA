# Title: Length of Last Word
# Submission ID: 1945521707
# Status: Accepted
# Date: March 11, 2026 at 07:46:55 PM CDT

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length -1;
    while(n>=0){
        if(s[n] === " "){
            --n;
        } else{
            break;
        }
    }
    let count = 0;
    while(n>=0){
        if(s[n]!=" "){
            --n;
            count++
        }
        else{
            break;
        }
    }
    return count;
};