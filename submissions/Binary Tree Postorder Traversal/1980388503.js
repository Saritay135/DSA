# Title: Binary Tree Postorder Traversal
# Submission ID: 1980388503
# Status: Accepted
# Date: April 16, 2026 at 02:23:31 PM CDT

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
   let s1 = [];
   let s2 = [root];
   if(!root) return [];
   
   while(s2.length){
   let  curr = s2.pop();
    s1.push(curr);
    curr.left && s2.push(curr.left);
    curr.right && s2.push(curr.right);

   }
   while(s1.length){
    ans.push(s1.pop().val);
   }
   return ans;
};