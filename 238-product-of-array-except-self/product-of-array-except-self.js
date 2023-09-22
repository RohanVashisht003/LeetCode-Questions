/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let leftArr = []
    let leftMultiply = 1;
    
    for(let i=0; i<nums.length; i++){
        leftArr[i] = leftMultiply;
        leftMultiply*=nums[i]
    }
    
    let rightArr = [];
    let rightMultiply = 1;
    
    for(let i=nums.length-1; i>=0; i--){
        rightArr[i] = rightMultiply;
        rightMultiply*=nums[i];
        leftArr[i]*=rightArr[i]
    }
    return leftArr
};