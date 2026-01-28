# Title: Odd Even Linked List
# Submission ID: 1899447434
# Status: Accepted
# Date: January 28, 2026 at 12:26:01 AM CST

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
    if(!head || !head.next) return head;
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