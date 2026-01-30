# Title: Rotate List
# Submission ID: 1902345429
# Status: Accepted
# Date: January 30, 2026 at 01:09:56 PM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let length = 0;
    let sentinel = new ListNode();
    sentinel.next = head;
    let slow = head;
    let fast = head;
    let curr = head;
    while(curr){
        curr = curr.next;
        length ++;
    }
    let remainder = k%length;
    for(let i=0; i<remainder; i++){
        fast= fast.next;
    }
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newhead = slow.next;
    slow.next = null;
   
  

    return newhead;;
};