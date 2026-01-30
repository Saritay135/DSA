# Title: Merge Two Sorted Lists
# Submission ID: 1902233501
# Status: Accepted
# Date: January 30, 2026 at 11:18:19 AM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    
    if (!l1 && !l2) return l1;
    if (l1 && l2 && (l1.val < l2.val)) {
      curr.next = l1
       l1 = l1.next;
       curr = curr.next;
    }
    else if(l1 && l2 && (l1.val >= l2.val)){
        curr.next = l2;
        l2 = l2.next;
        curr = curr.next;
    }
    
    while (l1 || l2) {
        let temp = new ListNode();
        if (!l1 && l2) {
           curr.next = l2;
           break;
        }
        if (l1 && !l2) {
           curr.next = l1;
          break;
        }
        if (l1 && l2 && (l2.val <= l1.val)) {
            curr.next = l2
            l2 = l2.next;
            //curr = l1;
            curr = curr.next;
        }
        if (l1 && l2 && (l2.val > l1.val)) {
            curr.next = l1;
            l1 = l1.next;
           // curr = l2;
            curr = curr.next;
        }

    }
    return dummy.next;
};