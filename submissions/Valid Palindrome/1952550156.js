# Title: Valid Palindrome
# Submission ID: 1952550156
# Status: Accepted
# Date: March 18, 2026 at 06:32:13 PM CDT

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0; 
    let j = s.length-1;
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
           ++i;
        }
        else if(!s[j].match(/[a-z0-9]/i)){
           --j;
        }
        else if(s[i] === s[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};