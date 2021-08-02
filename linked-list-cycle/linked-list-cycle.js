/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {    
    let fastHead = head;
    
    while(head && fastHead) {
        if (head === fastHead.next){
            return true
        }
        
        head = head.next;
        
        if(!fastHead.next) {
            return false;
        }
        
        fastHead = fastHead.next.next;
    }
    
    return false
};