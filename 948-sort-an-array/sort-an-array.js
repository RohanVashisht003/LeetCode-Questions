/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1){
        return nums
    }
let mid=nums.length/2
   let left= sortArray(nums.slice(0,mid));
   let right= sortArray(nums.slice(mid));
    return merge(left,right)
};


function merge(left,right){
    let i=0;
    let j=0
    let temp=[]
    
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            temp.push(left[i])
            i++
        }
        else{
            temp.push(right[j])
            j++
        }
    }
    while(i<left.length){
       temp.push(left[i])
        i++
    }
     while(j<right.length){
       temp.push(right[j])
        j++
    }
    
     
    return temp;
}