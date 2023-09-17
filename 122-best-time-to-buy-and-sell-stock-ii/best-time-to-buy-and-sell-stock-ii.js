/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    for(let i=1; i<=prices.length-1; i++){
        let current = prices[i];
        let prev = prices[i-1]
        
        if(prev<current){
            profit+= current-prev;
        }
    }
    return profit
};