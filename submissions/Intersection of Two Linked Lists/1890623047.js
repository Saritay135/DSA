# Title: Intersection of Two Linked Lists
# Submission ID: 1890623047
# Status: Accepted
# Date: January 19, 2026 at 11:13:23 PM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let seenNode = new Set();
    let curr = headB;
    while(curr){
        seenNode.add(curr);
        curr = curr.next
    }
    let curr2 = headA;
    while(curr2){
        if(seenNode.has(curr2)){
            return curr2;
        }
        curr2 = curr2.next;
    }
};