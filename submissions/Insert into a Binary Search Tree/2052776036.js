# Title: Insert into a Binary Search Tree
# Submission ID: 2052776036
# Status: Accepted
# Date: July 1, 2026 at 02:28:45 PM CDT

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
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    if(root.val < val){
        root.right = insertIntoBST(root.right, val);
    }
    else{
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};