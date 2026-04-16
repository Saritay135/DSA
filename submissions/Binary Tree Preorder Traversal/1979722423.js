# Title: Binary Tree Preorder Traversal
# Submission ID: 1979722423
# Status: Accepted
# Date: April 15, 2026 at 11:22:46 PM CDT

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
var preorderTraversal = function(root) {
    let ans = [];
    function traversal(curr){
        if(!curr) return;
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return ans;
};