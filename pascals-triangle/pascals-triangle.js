/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];
    
    for (let i = 0; i < numRows; i++) {
        let newArr = [];

        for (let j = 0; j < i + 1; j++) {
            let value = 1;
            let prevRow = res[i - 1];

            if (prevRow && prevRow[j] && prevRow[j - 1]) {
               value = prevRow[j] + prevRow[j - 1];
            }

            newArr.push(value);
        }

        res.push(newArr);
    }
    
    return res;
};