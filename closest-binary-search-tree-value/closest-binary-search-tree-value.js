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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target, res =[]) {
    const values = traverse(root,res);
    
    let min = Number.MAX_VALUE;
    let closestVal;
    
    for (let val of values) {
        const diff = Math.abs(target - val);
        
        if(diff < min) {
            min = diff;
            closestVal = val;
        }
    }
    
    return closestVal;
};


function traverse(root, res) {
    if(!root) {
        return;
    }
    
    res.push(root.val);
    
    traverse(root.left, res);
    traverse(root.right, res);
    
    return res;
}