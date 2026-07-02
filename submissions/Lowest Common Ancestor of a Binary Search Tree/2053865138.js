# Title: Lowest Common Ancestor of a Binary Search Tree
# Submission ID: 2053865138
# Status: Accepted
# Date: July 2, 2026 at 01:00:32 PM CDT

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(p.val>root.val && q.val>root.val){
       return lowestCommonAncestor(root.right, p,q)
    }else if(p.val<root.val && q.val<root.val){
       return lowestCommonAncestor(root.left, p,q)
    }else{
        return root;
    }
};