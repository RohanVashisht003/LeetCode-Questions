/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length;
    const ans=[]
    
    intervals.sort((a,b)=>a[0]-b[0]);
    
    for(let i=0; i<intervals.length; i++){
//         take start and end interval
        let start = intervals[i][0];
        let end = intervals[i][1]
        
//         skip all merged intervals
        if(ans.length && end<=ans[ans.length-1][1]){
            continue;
        }
        
        for(let j=i+1; j<n; j++){
            if(intervals[j][0]<=end){
                end = Math.max(end,intervals[j][1])
            }
            else{
                break;
            }
        }
        ans.push([start,end])
    }
    return ans
};