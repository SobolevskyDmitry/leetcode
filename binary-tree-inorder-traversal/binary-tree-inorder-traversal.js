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
var inorderTraversal = function(root) {
    const res = [];
    
    visit(root, res);

    return res;    
};

function visit(root, res) {
    if (!root) {
        return;
    }
    
    visit(root.left, res);
    
    res.push(root.val);
    
    visit(root.right, res);
}