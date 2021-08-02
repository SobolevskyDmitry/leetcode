/**
 * @param {number[]} prices
 * @return {number}
 
 
 [5,2,1,]
 */
var maxProfit = function(prices) {
    let buyIndex = 0;
    let sellIndex = 0;
    
    let max = 0;
    
    for(let i = 0; i < prices.length; i++){
        if (prices[i] < prices[i - 1] && prices[buyIndex] > prices[i]) {
            buyIndex = i;
        }
        
        if ((prices[i] - prices[buyIndex]) > max) {
           max = prices[i] - prices[buyIndex]
       }
    }
    
    return max;
};