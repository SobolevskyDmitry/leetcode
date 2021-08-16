/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let ans = 0;
  let curr = 1;
  let prev = 0;
    
   for (let i = 1; i < s.length; i++) {
     if (s[i - 1] === s[i]) {
         curr++;
     } else {
        ans += Math.min(prev, curr); 
        prev = curr;
        curr = 1; 
     }
   }
    
    return ans + Math.min(curr, prev);
};
