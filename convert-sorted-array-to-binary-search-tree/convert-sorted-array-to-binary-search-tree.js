/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return createBST(nums, 0, nums.length - 1);
};


function createBST(arr, start, end) {
    if(end < start) {
        return null;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    const newNode = new TreeNode(arr[mid]);
    
    newNode.left = createBST(arr, start, mid - 1);
    newNode.right = createBST(arr, mid + 1, end);
    
    return newNode;
}