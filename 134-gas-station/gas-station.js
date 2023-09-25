/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    let total_gas=0;
    
    let start=0;
    let current=0;
    
    for(let i=0; i<gas.length; i++){
        total_gas+=gas[i]
    }
    
    let total_cost=0;
    
    for(let j=0; j<cost.length; j++){
        total_cost+=cost[j]
    }
    
    if(total_gas<total_cost){
        return -1;
    }
    
    for(let i=0; i<gas.length; i++){
        current+=(gas[i]-cost[i])
        if(current<0){
            start= i+1;
            current=0
        }
    }
    return start
};