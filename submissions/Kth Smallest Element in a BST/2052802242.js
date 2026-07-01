# Title: Kth Smallest Element in a BST
# Submission ID: 2052802242
# Status: Accepted
# Date: July 1, 2026 at 03:09:41 PM CDT

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
    curr.left && traversal(curr.left);
    --count;
    if(count==0) ans = curr.val;
    curr.right && traversal(curr.right);
   } 
   traversal(root);
   return ans;
};