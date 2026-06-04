# Title: Count Good Nodes in Binary Tree
# Submission ID: 2021734084
# Status: Accepted
# Date: June 3, 2026 at 07:47:49 PM CDT

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
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0;
    let traversal = (curr,maxSeenSoFar) => {
       if(curr.val >= maxSeenSoFar){
        ++ans;
       }
       let currMax = Math.max(maxSeenSoFar, curr.val);
       curr.left && traversal(curr.left, currMax);
       curr.right && traversal(curr.right, currMax);
    }

    traversal(root, -Infinity);
    return ans;
};