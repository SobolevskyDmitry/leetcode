/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
      return [];
  }
    
    const queue = [[root, 0]];
     const res = [];
    
     while(queue.length) {
         const [node, i] = queue.shift();
         
         if(res[i]) {
             res[i].push(node.val);
         } else {
             res[i] = [node.val];
         }
         
         if(node.children && node.children.length) {
             queue.push(...node.children.map(el => [el, i + 1]));
         }
     }
    
     return res;
};