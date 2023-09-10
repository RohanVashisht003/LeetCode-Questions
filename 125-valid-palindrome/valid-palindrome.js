/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;
    s = s.toLowerCase();
    if(s == null){
        return false;
    }

    while(left<right){
        while(left<right && !((s.charAt(left)>='a' && s.charAt(left)<='z')||(s.charAt(left)>='0' && s.charAt(left)<='9'))){
            left++;
        }
         while(left<right && !((s.charAt(right)>='a' && s.charAt(right)<='z')||(s.charAt(right)>='0' && s.charAt(right)<='9'))){
            right--;
        }
        if(s.charAt(left)!==s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
};