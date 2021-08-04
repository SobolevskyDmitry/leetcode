/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = Math.round(nums.length / 2);
    let counter = 0;
    
    nums = nums.sort();
    
    for(let i = nums.length - 1; i >=0; i--){
        if(nums[i] !== nums[i - 1] && counter + 1 >= count) {
            return nums[i]
        }
        
        counter++;
    }

};