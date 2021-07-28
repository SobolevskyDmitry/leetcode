/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    if (!digits) {
        return;
    }
  
    for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] === 9) {
            digits[i] = 0;
        } else if(digits[i] !== 9) {
            digits[i]++;
            
            return digits;
        }
    }
    
    return [1, ...digits];
};

