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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = [];

    traversal(root, res);
    
    return res;
};



function traversal(root, res) {
    if (!root) {
        return;
    }
    
    res.push(root.val);
    
    traversal(root.left, res);
    traversal(root.right, res);
}