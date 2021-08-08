/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums) {
        return null;
    }
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = true;
        }
    }
    
    return false;
};