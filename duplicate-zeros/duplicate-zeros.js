/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 
 // 102
 */
var duplicateZeros = function(arr) {
    const copy = [...arr];

    let copyIndex = 0
    let i = 0;
    
    while(copyIndex < copy.length && i < copy.length) {
        if(copy[copyIndex]) {
            arr[i] = copy[copyIndex];
        } else {
            arr[i] = 0;
            
            if(i + 1 < copy.length) {
              arr[i + 1] = 0;
              i++;                    
            }
        }
        
        i++;
        copyIndex++;
    }    
};