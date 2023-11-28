/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let n = nums.length
    let freq = []
for(let i=0; i<=n+1; i++){
    freq.push(0)
}
    
    for(let i=0; i<nums.length; i++){
        if(freq[nums[i]]==0){
            freq[nums[i]]+=1
        }
        else{
            return nums[i]
        }
    }
    return 0
};