/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currMax=0
    let jumpsCount=0;
    let farthest = 0;
    
    for(let i=0; i<nums.length-1; i++){
        farthest = Math.max(farthest,i+nums[i]);
        
        if(i === currMax){
            jumpsCount++;
            currMax = farthest;
        }
    }
    return jumpsCount
};