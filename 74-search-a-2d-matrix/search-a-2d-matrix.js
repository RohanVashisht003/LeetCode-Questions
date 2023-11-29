/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binarySearch = function(nums,target){
    let low=0;
    let high = nums.length-1;
    
    while(low<=high){
        let mid = Math.floor((low+high)/2)
         
        if (nums[mid] === target) return true;
        else if (target > nums[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return false
}
var searchMatrix = function(matrix, target) {
    for(let i=0; i<matrix.length; i++){
        if(matrix[i][0]<=target && target<= matrix[i][matrix[0].length-1]){
            return binarySearch(matrix[i],target);
        }
    }
    return false
};