/**
 * @param {number[]} nums
 * @return {number}
  v       v
 [1,2,4,1,2]
 */
var singleNumber = function(nums) {
    const map = new Map();    
    
    for(let i = 0; i < nums.length; i++) {
        let numCount = map.get(nums[i]);
        map.set(nums[i], numCount ? ++numCount : 1);
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(map.get(nums[i]) === 1){
            return nums[i]
        }
    }
};