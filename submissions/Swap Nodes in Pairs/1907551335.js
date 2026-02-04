# Title: Swap Nodes in Pairs
# Submission ID: 1907551335
# Status: Accepted
# Date: February 3, 2026 at 11:49:15 PM CST

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
var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    if(!head || !head.next) return head;
    let curr = head;
    let prev = dummy;
    let n = head.next;
  
    while(curr && curr.next){
       let  n = curr.next; 
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev.next.next = curr;
        prev = prev.next.next;
        curr = prev.next;
        
    }
    return dummy.next;
};