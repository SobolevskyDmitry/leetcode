/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) {
        return nums[0]
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++) {
     let res = maxSum(nums.slice(i));
        
        if (res > max) {
            max = res;
        }
    }
    
    return max
};

function maxSum(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {        
        sum+=nums[i];
        
        if(sum > max) {
            max = sum;
        }
    }
    
    return max
}