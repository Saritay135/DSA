# Title: Evaluate Reverse Polish Notation
# Submission ID: 1964290940
# Status: Runtime Error
# Date: March 30, 2026 at 04:55:59 PM CDT

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0; i<tokens.length; i++){
        if(tokens[i]==="+" || tokens[i]==="-" || tokens[i]==="*" || tokens[i]==="/"){
           let a=stack.pop();
           let  b=stack.pop();
           let  ans = eval(`${b} ${tokens[i]}${a}`);
            stack.push(Math.trunc(ans));
        }else{
            stack.push(tokens[i]);
        }
    }
 return Number(stack.pop());
 };