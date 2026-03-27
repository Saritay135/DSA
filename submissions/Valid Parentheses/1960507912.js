# Title: Valid Parentheses
# Submission ID: 1960507912
# Status: Accepted
# Date: March 26, 2026 at 11:01:39 PM CDT

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(s[i]==="[" || s[i]==="{" || s[i]==="("){
            stack.push(s[i]);
        }else{
            let top = stack.pop();
            if(!top || (top==="[" && s[i]!=="]") || (top==="{" && s[i]!=="}") ||  (top==="(" && s[i]!==")")){
                return false;
            }
        }
    }
    return stack.length === 0;
};