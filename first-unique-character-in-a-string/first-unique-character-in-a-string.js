/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        let unique = true;
        
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                unique = false;
                
                break;
            }
        }
        
        if (unique) {
            return i;
        }
    }
    
    return -1;
};