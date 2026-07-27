# Title: Rotate List
# Submission ID: 2083935414
# Status: Runtime Error
# Date: July 27, 2026 at 03:43:32 PM CDT

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
    let fast = head;
    let slow = head;
    let curr = head;
    let length=0;
    while(curr){
        curr= curr.next;
        ++length;
    }
    let remainder = k%length;
    
    for(let i=0;i< remainder;i++){
        fast = fast.next;
    }
    while(fast.next){
        slow= slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    
    return newHead;

};