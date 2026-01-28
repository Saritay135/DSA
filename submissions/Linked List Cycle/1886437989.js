# Title: Linked List Cycle
# Submission ID: 1886437989
# Status: Accepted
# Date: January 15, 2026 at 10:39:09 PM CST

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
   while(fast != slow){
     
     if(fast===null || fast.next==null){
        return false ;
     }
     slow = slow.next;
     fast = fast.next.next;
   }
   return true;
    
};