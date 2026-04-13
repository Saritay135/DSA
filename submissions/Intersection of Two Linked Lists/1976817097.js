# Title: Intersection of Two Linked Lists
# Submission ID: 1976817097
# Status: Accepted
# Date: April 12, 2026 at 07:05:51 PM CDT

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
    let n = 0;
    let pA = headA;
    while(headA){
        headA = headA.next;
        n++;
    }
    let m = 0;
    let pB = headB;
    while(headB){
        headB = headB.next;
        m++;
    }
    if(n>m){
        let temp = pA;
        pA = pB;
        pB = temp;
    }
    let diff = Math.abs(n-m);
    for(let i=0; i<diff; i++){
        pB= pB.next;
    }
    headA = pA;
    headB = pB;
    while(pA!=pB){
        pA=pA.next;
        pB=pB.next;
    }
    return pA;
};