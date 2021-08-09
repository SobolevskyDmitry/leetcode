/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    
    let realSum = 0;
    
    for (let i=0; i <= nums.length; i++) {
        realSum+=i;
    }
    
    return realSum - sum;
};


