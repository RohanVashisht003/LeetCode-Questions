/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans=0;
    n = n.toString(2)
    let start=0;
    let end = n.length-1
    while(start<=end){
         if(n.charAt(start)==='1'){
            ans++;
        }
        start++;
    }
       
    
    return ans
};