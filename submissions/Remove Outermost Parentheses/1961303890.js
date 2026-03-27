# Title: Remove Outermost Parentheses
# Submission ID: 1961303890
# Status: Accepted
# Date: March 27, 2026 at 05:37:15 PM CDT

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";
    for(let i=0;i<s.length; i++){
       
        if(s[i]==="("){
            stack.push(s[i]);
            if(stack.length > 1){
                ans = ans + s[i];
            }
        }
        else{
            if(stack.length > 1){
                ans = ans + s[i];
            }
            stack.pop();
        }
    }
    return ans;
};