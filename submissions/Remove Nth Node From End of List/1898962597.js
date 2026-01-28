# Title: Remove Nth Node From End of List
# Submission ID: 1898962597
# Status: Accepted
# Date: January 27, 2026 at 12:01:37 PM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let fast = head;
    sentinel.next = head;
    let slow = sentinel;

    for(let i=0; i<n; i++){
        fast = fast.next;
    }
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return sentinel.next;
};