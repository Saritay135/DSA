# Title: Same Tree
# Submission ID: 1984063514
# Status: Accepted
# Date: April 20, 2026 at 09:27:57 PM CDT

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;

    return p.val === q.val &&
           isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
};