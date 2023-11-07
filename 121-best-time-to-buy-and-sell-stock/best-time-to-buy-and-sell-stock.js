/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let s=0;
    let maxProfit=0;
    let e=1;
    while(e<prices.length){
        if(prices[s]<prices[e]){
            let profit = prices[e]-prices[s]
            maxProfit  = Math.max(maxProfit,profit)
            e++
        }
        else{
            s=e;
            e++
        }
    }
    return maxProfit
};