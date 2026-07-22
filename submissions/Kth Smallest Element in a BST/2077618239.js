# Title: Kth Smallest Element in a BST
# Submission ID: 2077618239
# Status: Accepted
# Date: July 22, 2026 at 02:39:57 PM CDT

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
   let ans = null;
   let count = k;
   let traversal = (curr) => {
    if(ans != null) return;
    curr.left && traversal(curr.left);
    --count;
    if(count==0) ans = curr.val;
    curr.right && traversal(curr.right);
   } 
   traversal(root);
   return ans;
};