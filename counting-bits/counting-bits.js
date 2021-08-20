/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const res = [];
    
   for (let i=0; i <= n; i ++) {
     const onlyOnes = i.toString(2).replace(/0/g, '');

     res.push(onlyOnes.length);
   }
    
   return res;
};