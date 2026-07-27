# Title: Remove Duplicates from Sorted List
# Submission ID: 2083718347
# Status: Accepted
# Date: July 27, 2026 at 12:16:58 PM CDT

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
var deleteDuplicates = function(head) {
  let curr = head;
  while(curr && curr.next){
    if(curr.val === curr.next.val){
        curr.next = curr.next.next;
    }else{
        curr = curr.next;
    }
  }
  return head;
};