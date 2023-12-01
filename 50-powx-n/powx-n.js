/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
//     bruteforce
    // let ans=1.0;
    // for(let i=1; i<=n; i++){
    //     ans = ans*x
    // }
    // return ans
    
    let ans=1.0;
    let nn = n;
    if(nn<0){
        nn = -1*nn
    }
    while(nn){
        if(nn%2==1){
            ans=ans*x;
            nn = nn-1;
        }
        else{
            x = x*x;
            nn = nn/2
        }
    }
    if(n<0){
       ans = 1/ans
    }
    return ans
};