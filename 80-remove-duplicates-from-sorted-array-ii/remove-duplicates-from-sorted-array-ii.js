/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length <=2){
        return nums.length;
    }
    let e=2;
    for(let i=2; i<nums.length; i++){
        if(nums[i]!== nums[e-2]){
            nums[e] = nums[i];
            e++;
        }
    }
    return e
};