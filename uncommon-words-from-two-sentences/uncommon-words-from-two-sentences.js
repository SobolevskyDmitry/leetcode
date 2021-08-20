/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
 const s1Arr = s1.split(' ');
 const s2Arr = s2.split(' ');   
 const map = {};
        
 
 for(let word of s1Arr) {
     if(map[word]) {
         map[word]++;
     } else {
         map[word] = 1;
     }
 }  
    
 for(let word of s2Arr) {
       if(map[word]) {
         map[word]++;
     } else {
         map[word] = 1;
     }
 }  
    
    
    return Object.keys(map).filter(key => map[key] === 1);
};