/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>b-a);
    let res = 0;
    for(let i=1; i<=citations.length; i++){
        if(citations[i-1]<i){
         break;
        }
        res = i;
    }
    return res
};