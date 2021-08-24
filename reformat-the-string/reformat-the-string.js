/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    if (!s || s.length === 1) {
        return s
    }
    
    const digits = [];
    const letters = [];
    let res = '';
    
    for(let symbol of s) {
        if(isNaN(symbol)) {
            letters.push(symbol);
        } else {
            digits.push(symbol);
        }
    }
    
    if(!digits.length || !letters.length) {
        return '';
    }
   
   let shorter, longer;
   
   if (digits.length !== letters.length) {
        shorter = digits.length > letters.length ? letters : digits;  
        longer = digits.length < letters.length ? letters : digits;  
   } else {
      shorter = digits;
      longer = letters; 
   }
   
   for (let i = 0; i < longer.length; i++) {
       res+=longer[i];
        
       if(shorter[i] !== undefined) {
           res+=shorter[i];
       }
    }
    
    return res;
};