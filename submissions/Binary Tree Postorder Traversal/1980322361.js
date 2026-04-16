# Title: Binary Tree Postorder Traversal
# Submission ID: 1980322361
# Status: Accepted
# Date: April 16, 2026 at 01:04:19 PM CDT

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
    function traversal(curr){
        if(!curr) return;
        traversal(curr.left);
        traversal(curr.right);
       ans.push(curr.val);

    }
    traversal(root);
    return ans;
};