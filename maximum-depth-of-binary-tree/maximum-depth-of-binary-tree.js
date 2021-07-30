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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let lMaxDepth = maxDepth(root.left);
    let rMaxDepth = maxDepth(root.right);
    
    if (lMaxDepth >= rMaxDepth) {
        return 1 + lMaxDepth;
    } else {
        return 1 + rMaxDepth;
    }
};


