/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack && !needle || haystack && !needle || haystack === needle) {
        return 0;
    }
    

    const needleLength = needle.length;
    let test = '';
    
    for(let i = 0; i < haystack.length; i++) {
        test+= haystack[i];
        
        if(test.slice(-needleLength) === needle) {
            return i - needleLength + 1;
        }
    }
    
    
    return -1;
};

//abc
//  c