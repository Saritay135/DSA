# Title: Palindrome Linked List
# Submission ID: 1890508924
# Status: Accepted
# Date: January 19, 2026 at 08:34:26 PM CST

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // find the middle element 
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let middle = slow;
    // reverse the linked list from middle 
    let curr= middle;
    let prev = null;
    let temp;
    while(curr){
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    }

    let firstList = head;
    let secondList = prev;
    while(secondList){
        if(firstList.val === secondList.val){
            firstList = firstList.next;
            secondList = secondList.next;
        }
        else {
            return false;
        }
    }
    return true;
};