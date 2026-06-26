# Title: Search in a Binary Search Tree
# Submission ID: 2047249300
# Status: Accepted
# Date: June 26, 2026 at 04:35:52 PM CDT

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root || root.val === val) return root;

    return root.val<val ? searchBST(root.right, val): searchBST(root.left, val)
};