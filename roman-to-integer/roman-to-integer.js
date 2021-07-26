/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    let i = s.length - 1;
    const map = {'I': 1, 'IV': 4,'V': 5, 'IX': 9 ,'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100, 'CD':400 ,'D': 500, 'CM': 900,'M': 1000};
    
    while(i >= 0){
        const doulbeKey = s[i - 1] + s[i];
        if(map[doulbeKey]){
            res+=map[doulbeKey];
            i-=2;
        } else if(map[s[i]]){
            res+= map[s[i]];
            i--;
        }
    }
    
    return res;
};