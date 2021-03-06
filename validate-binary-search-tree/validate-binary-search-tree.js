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
var isValidBST = function(root) {
    let prev;
    
    return inorder(root);
    
    function inorder(root) {
        if (root === null) {
            return true;
        }
        
        if (!inorder(root.left)) {
             return false;
        }
        
        if (prev !== undefined && root.val <= prev) {
            return false;
        }
        
        prev = root.val;
        
        return inorder(root.right)
    }
};