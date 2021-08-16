/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
 let left = 0;
 let right = s.length - 1;

  while(left < right) {
      if(s[left] !== s[right]){
          return isPalindrom(s, left + 1, right) || isPalindrom(s, left, right - 1);
      }
      
      left++;
      right--;
  }  
    
    return true;
};


function isPalindrom(s, left, right) {
    while(left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
