/**
 * @param {number[]} prices
 * @return {number}
 
    v 
 [7,1,5,3,6,4]
 */
var maxProfit = function(prices) {
    let max = 0
    let minValue = Number.MAX_VALUE;
    
    
    for(let i = 0; i < prices.length; i++) {
        if(minValue > prices[i]) {
            minValue = prices[i];
        } else if(prices[i] > minValue && (prices[i + 1] < prices[i] || !prices[i + 1])) {
            max+= (prices[i] - minValue);
            minValue = Number.MAX_VALUE;
        }
    }
    
    return max;
};