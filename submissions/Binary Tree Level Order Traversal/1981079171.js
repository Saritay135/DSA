# Title: Binary Tree Level Order Traversal
# Submission ID: 1981079171
# Status: Accepted
# Date: April 17, 2026 at 11:14:50 AM CDT

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [root];
    let ans = [];
    if(!root) return [];
    while(queue.length){
        let levelArray = [];
        let levelSize = queue.length;
        for(let i=0; i<levelSize; i++){
        let curr = queue.shift();
        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
        levelArray.push(curr.val);
        }
        ans.push(levelArray);
    }
    return ans;
};