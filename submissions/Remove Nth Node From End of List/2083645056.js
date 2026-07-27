# Title: Remove Nth Node From End of List
# Submission ID: 2083645056
# Status: Accepted
# Date: July 27, 2026 at 11:30:10 AM CDT

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
    let slow = sentinel;
    let fast = head;
    for(let i=0; i<n;i++){
        fast = fast.next;
    }
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return sentinel.next;
};