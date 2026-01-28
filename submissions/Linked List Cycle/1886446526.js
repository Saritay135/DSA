# Title: Linked List Cycle
# Submission ID: 1886446526
# Status: Accepted
# Date: January 15, 2026 at 10:51:24 PM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false;
   let slow = head;
   let fast = head.next;
   while(fast && fast.next){
     slow = slow.next;
     fast = fast.next.next;
     if(fast === slow){
        return true;
     }
   }
   return false; 
};