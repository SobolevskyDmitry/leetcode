/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const dividedBy3 = "Fizz";
    const dividedBy5 = "Buzz";
    const arr = [];
    
    for(let i = 1; i <= n; i++) {
        let s = '';
        
         if(i % 3 === 0) {
            s += dividedBy3;
         } 
        
         if(i % 5 === 0) {
            s += dividedBy5;
         } 
        
         if(i % 3 && i % 5) {
             s += i;
         }
        
        arr.push(s); 
    }
    
    return arr;
};