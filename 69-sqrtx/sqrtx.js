/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1;
    let high = x;
   if (x === 0 || x === 1) {
    return x
}
    while(left<=high){
        let mid = Math.floor((left+high)/2);
        if(mid*mid<=x){
          
            left = mid+1;
        }
        else{
            high = mid-1
        }
    }
    return high;
};