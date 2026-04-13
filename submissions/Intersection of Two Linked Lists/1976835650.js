# Title: Intersection of Two Linked Lists
# Submission ID: 1976835650
# Status: Accepted
# Date: April 12, 2026 at 08:02:17 PM CDT

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
    
    let pA = headA;
    let pB = headB;
    while(pA!=pB){
        pA = pA==null?headB:pA.next;
        pB = pB==null?headA:pB.next;
    }
    
    return pA;
};