# Title: Lowest Common Ancestor of a Binary Tree
# Submission ID: 2000723009
# Status: Accepted
# Date: May 11, 2026 at 12:20:53 PM CDT

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
    let lca = null;
    let traversal = (curr) => {
         let count = 0;
      if(!curr) return 0;
     
      let ansOnLeft = traversal(curr.left);
      let ansOnRight = traversal(curr.right);
      if(p.val === curr.val || q.val === curr.val){
        count++;
      }
      count = ansOnLeft + ansOnRight + count;
      if(count===2 && !lca){
        lca = curr;
      }
      return count;
    }
    traversal(root);
    return lca;
};