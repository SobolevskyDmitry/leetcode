/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const pRes = [];
    const qRes = [];
    
    traverseTree(p, pRes);
    traverseTree(q, qRes);
    
    if(pRes.length !== qRes.length) {
        return false;
    }
    
    return pRes.every((val,i) => qRes[i] === val);
};

function traverseTree(root, res) {
        
    if(!root) {
        res.push(null);
        return;
    }
    
   res.push(root.val);
    
    if (!root.left && !root.right) {
        return;
    }
    
    traverseTree(root.left, res);
    traverseTree(root.right, res);
}