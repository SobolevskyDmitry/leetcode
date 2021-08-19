/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    if (!arr) {
        throw new Error('Bad arguments');
    }
    
    let i = 0;
    while(arr[i] < arr[i + 1]) {
        i++;
    }
    
    return i;
};