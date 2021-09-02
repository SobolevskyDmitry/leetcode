/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const rotatedMap = {0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 9, 7: 0, 8: 8, 9:6};
    
    let strNumber = num.toString();
    
    let i = 0, j = strNumber.length - 1;
    
    while(i <= j) {
        if(+strNumber[i] !== +rotatedMap[strNumber[j]]) {
            return false;
        }
        
        i++;
        j--;
    }
    
    return true
};