# Title: Odd Even Linked List
# Submission ID: 1899137905
# Status: Runtime Error
# Date: January 27, 2026 at 03:37:36 PM CST

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
    let odd = head;
    let even = odd.next;
    let evenStart = even;
    while(odd.next && even.next){
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
     odd.next = evenStart;
     return head;
};