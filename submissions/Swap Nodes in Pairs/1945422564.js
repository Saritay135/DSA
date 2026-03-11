# Title: Swap Nodes in Pairs
# Submission ID: 1945422564
# Status: Accepted
# Date: March 11, 2026 at 03:17:58 PM CDT

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
        n = curr.next; 
        prev.next = n;
        curr.next = n.next;
        n.next = curr;
        prev = curr;
        curr = prev.next;
        
    }
    return dummy.next;
};