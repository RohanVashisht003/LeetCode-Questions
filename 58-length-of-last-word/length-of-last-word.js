/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     s = s.trim()
    const last_index = s.lastIndexOf(' ')
    if(last_index === -1){
        return s.length;
    }
    return s.length-last_index-1
};