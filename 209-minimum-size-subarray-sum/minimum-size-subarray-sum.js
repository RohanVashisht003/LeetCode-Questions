/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum =0;
    let start=0;
    let end=0;
    let window = Number.MAX_VALUE
    
    for(end = 0; end<nums.length; end++){
        sum+=nums[end];
        
        while(sum>=target){
            window = Math.min(window,end-start+1)
            sum-=nums[start]
            start++;
        }
    }
    return window === Number.MAX_VALUE?0:window
};