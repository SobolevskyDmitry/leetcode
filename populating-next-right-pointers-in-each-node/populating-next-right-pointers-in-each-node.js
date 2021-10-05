/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return root;
    }
    
    const queue = [root];

    while(queue.length) {
        
        const size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            
            
            if(i < size - 1) {
                node.next = queue[0];
            }
            
            if(node.left != null) {
                queue.push(node.left)
            }
            
            if(node.right != null ) {
                queue.push(node.right);
            }
        }   
    }
    
    
    return root;
};