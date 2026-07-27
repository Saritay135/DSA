# Title: Odd Even Linked List
# Submission ID: 2083745981
# Status: Runtime Error
# Date: July 27, 2026 at 12:34:15 PM CDT

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
   if(!head && !head.next) return head;
   let odd = head;
   let even = head.next;
   let evenStart = even;
   while(odd.next && even.next){
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even= even.next;
   }
   odd.next = evenStart;
   return head;
};