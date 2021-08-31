/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    
    
    while(j < t.length) {
        if(s[i] === t[j]) {
            j++;
            i++;
        } else {
            j++;
        }
    }
      
    return i === s.length;
};