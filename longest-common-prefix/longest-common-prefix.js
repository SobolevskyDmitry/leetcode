/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length){
        return ''
    }
    
    let res = '';
    
    const firstWord = strs[0];
    
    for (let i = 0; i < firstWord.length; i++) {
         let temp = res + firstWord[i];
        
         for(let j = 0; j < strs.length; j++) {
              if( strs[j].indexOf(temp) !== 0){
                  return res;
              }
        }
        
        res = temp;
    }
   

    return res;
};