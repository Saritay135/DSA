# Title: Reverse String II
# Submission ID: 1951577619
# Status: Accepted
# Date: March 17, 2026 at 05:55:58 PM CDT

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
     s = s.split("");
    for(let i=0; i<s.length; i=(i+(2*k))){
        
        let mid = Math.floor((k)/2);
        for(let j=0; j < mid;  j++){
           let temp = s[j+i];
           s[i+j] = s[i+k-1-j];
           s[i+k-j-1] = temp;
           
        }
    }
    return s.join("");
};