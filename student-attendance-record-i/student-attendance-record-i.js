/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    let late = 0;
    
    for (let i=0; i < s.length; i++) {
        if(late && late < 3 && s[i] !== 'L') {
            late = 0;
        }
        
        if(s[i] === 'L') {
            late++
        } else if(s[i] === 'A') {
            absent++;
        }
    }
    
    return absent < 2 && late < 3
};