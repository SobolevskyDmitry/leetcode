/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let right = nums.length - 1;
    let left = 0;
    
    
    while(left < right) {
        if(nums[left] % 2 && nums[right] % 2 === 0) {
            
            swap(nums,left, right);
            right--;    
        }   
       
        if(nums[left] % 2 && nums[right] % 2) {
            while(left < right && nums[right] % 2) {
                right--;
            }
            
            if(nums[right] % 2 === 0) {
                swap(nums, left, right);
                right--;
            }
        }
        
        left++;
    }
    
   
    return nums;
};


function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}