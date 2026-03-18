# Title: Valid Palindrome
# Submission ID: 1952535252
# Status: Accepted
# Date: March 18, 2026 at 05:43:26 PM CDT

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString = "";
    let rev = "";
    for(let i=0; i<s.length; i++){
if((s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() ) ||
 (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt() )) {
        //if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i];
            rev = s[i] + rev;
        }
    }
    return filteredString===rev;
};