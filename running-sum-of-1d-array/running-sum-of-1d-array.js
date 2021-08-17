/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((val, i) => sum(nums, i));
};


function sum(arr, maxIndex) {
  let sum = 0;
    
  for(let i = 0; i <=maxIndex; i++) {
      sum+=arr[i];
  }  

 return sum;
}