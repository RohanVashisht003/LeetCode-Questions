/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let left=0;
    let right = x.length-1;

    while(left<right){
        if(x.charAt(left)!==x.charAt(right)){
            return false;
        }
        left++;right--;
    }
    return true;
};