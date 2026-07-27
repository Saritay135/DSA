# Title: Add Two Numbers
# Submission ID: 2083815916
# Status: Accepted
# Date: July 27, 2026 at 01:20:13 PM CDT

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   let newNode = new ListNode();
   let current = newNode;
   let carry =0;
   let sum =0;
   while(carry || l1 || l2){
    let digit = 0;
    sum = ((!l1?0:l1.val)+(!l2?0:l2.val)+(carry))
    carry =Math.floor(sum/10);
    digit = sum%10;

    current.next = new ListNode(digit);
    current =current.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
   }
   return newNode.next;
};