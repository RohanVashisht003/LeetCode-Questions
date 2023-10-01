/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = -1
    let i=0;
    let j=height.length-1;
    
    while(i<j){
        let area=0;
        
        if(height[i]<height[j]){
            area = height[i]*(j-i)
            i++
        }
        else{
            area = height[j]*(j-i)
            j--
        }
        ans = Math.max(ans,area)
    }
    return ans
};