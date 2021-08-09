/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let zerosCount = 0;
   const arr = [];
    
   nums.forEach(val => {
      if(!val) {
          zerosCount++;
      } else {
          arr.push(val);
      }
   });
    
  for (let i =0; i < zerosCount; i++) {
      arr.push(0);
  }
  
  arr.forEach((val,i) => nums[i] = val);  
    
};