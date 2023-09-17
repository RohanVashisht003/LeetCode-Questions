/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    
    let i=0;
    let j=1;
    while(j<prices.length){
        if(prices[i]<prices[j]){
            profit = Math.max(prices[j]-prices[i],profit);
            j++
        }
        else{
            i = j
            j++
        }
    }
    return profit
};