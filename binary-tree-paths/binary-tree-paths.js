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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];

    constructPath(root, '', res);
    
    return res;
};

function constructPath(root, path, result) {
  if(!root) {
      return;
  }
    
  path+=root.val;
    
  if (!root.left && !root.right) {
      result.push(path);
  }  else {
      path+= '->';
      
      constructPath(root.left, path, result);
      constructPath(root.right, path, result);
  } 
}