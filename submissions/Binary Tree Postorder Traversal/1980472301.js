# Title: Binary Tree Postorder Traversal
# Submission ID: 1980472301
# Status: Accepted
# Date: April 16, 2026 at 05:52:50 PM CDT

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans= [];
    let stack = [];
    let curr = root;
    let lastVisited = null;
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        let peekNode = stack[stack.length-1];
        if(peekNode.right && peekNode.right!= lastVisited){
           curr = peekNode.right;
        }else{
            ans.push(peekNode.val);
            lastVisited = stack.pop();
        }
    }
   return ans;
};