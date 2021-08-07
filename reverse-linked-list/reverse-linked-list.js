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
var reverseList = function(head) {
    if (!head) {
        return null
    }
    
    const arr = [];
    
    while(head) {
        const next = head.next;
        
        head.next = null;
        arr.push(head);  
        
        head = next;
    }
    
    const newHead = arr[arr.length - 1];
    
    let temp = newHead;
    
    for (let i = arr.length - 2; i >=0; i--) {
        temp.next = arr[i];
        temp = temp.next;
    }
    
    return newHead;
};