/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const rotatedMap = {0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0, 6: 9, 7: 0, 8: 8, 9:6};
    
    let strNumber = num.toString();
    let newNumber = '';
    
    for(let i = strNumber.length - 1; i >=0; i--) {
        newNumber +=rotatedMap[strNumber[i]]
    }
    
    return +strNumber === +newNumber;
};