# Title: Remove Nth Node From End of List
# Submission ID: 1894807024
# Status: Accepted
# Date: January 23, 2026 at 05:41:33 PM CST

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
    let length = 0;
    while(head){
        head = head.next;
        length ++;
    }
    let prev = sentinel;
    for(let i=0; i<length-n; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};