/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const missingNumber = [];
    
  const map = arr.reduce((acc, cur) => {
   acc[cur] = true;   
      
   return acc;   
  },{});
    
  
  for(let i = 1; i <= arr.length + 1000; i++) {
     if (map[i]) {
         continue;
     } 
      
     missingNumber.push(i); 
  }  
    
  return missingNumber[k - 1];  
};