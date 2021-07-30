/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
 const queue = [root, root];
    
  while(queue.length) {
      let l = queue.shift();
      let r = queue.shift();
      
      if(!l && !r) {
          continue;
      }
      
      if(!l || !r) {
        return false;  
      }
      
      if(l.val !== r.val) {
          return false;
      }
      
      queue.push(l.right, r.left);
      queue.push(l.left, r.right);
  }  
    
    
  return true;
};
