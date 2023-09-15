/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n;
    if (k === 0 || n === 0 || n === k) {
        return;
    }
    
    let start=0;
    let count=0;
    let current = start;
    let prev = nums[start]
    
    while(count<n){
        current = (current+k)%n;
        var temp = nums[current];
        nums[current] = prev;
        prev = temp;
        count++;
        
        if(current === start){
            start++;
            current = start;
            prev = nums[start];
        }
    }
};