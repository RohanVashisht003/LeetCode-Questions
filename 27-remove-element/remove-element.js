/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j=0;
  for(let i of nums){
      if(i !== val){
          nums[j] = i;
           j++;
      }
  }
  return j
};