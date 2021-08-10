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
var diameterOfBinaryTree = function(root) {
    let diametr = 0;
    
    longestPath(root);
    
    return diametr;
    
    function longestPath(node) {
        if (node === null) {
            return 0;
        }

        let leftPath = longestPath(node.left);
        let rightPath = longestPath(node.right);

        diametr = Math.max(diametr, leftPath + rightPath);

        return Math.max(leftPath, rightPath) + 1;
    }
};

