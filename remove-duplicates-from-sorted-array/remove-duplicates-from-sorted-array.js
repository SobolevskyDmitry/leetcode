/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let i = 0;
   let n = 0;
    
    let curElem;
    
    while(i < nums.length) {
        if(nums[i] !== curElem) {
            curElem = nums[i];
            nums[n] = nums[i];
            n++;
        }
        
        i++;
    }
    
    return n;
};