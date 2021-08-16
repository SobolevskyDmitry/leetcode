/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if (nums.indexOf(0) !== -1) {
        return 0;
    }
    
    const sum = productOfAllValues(nums);
    
    if(sum > 0) {
        return 1;
    } else if(sum < 0) {
        return -1;
    }

    return 0;
};

function productOfAllValues(arr) {
    return arr.reduce((acc, val) => acc * val,1)
}