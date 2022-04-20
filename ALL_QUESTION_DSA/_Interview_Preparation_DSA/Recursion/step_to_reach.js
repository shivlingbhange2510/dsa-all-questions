// you are given stpe you are at 0 position step you have to reacr at top of step 
// you can jump only 1,2 step how many ways are there we can reach at top;
// let dp=[]; 
// let n2=4;
// for(let i=0;i<n2;i++){
//     dp[i]=-1;
// }
// dp[n2-1]=1;
function reachAtTop(i,n,dp){

    if(i==n){
        return 1;
    }
    if(i>n){
        return 0;
    }
    if(dp[i]!=-1){
        return dp[i]
    }
    let x= reachAtTop(i+1, n, dp)+ reachAtTop(i+2, n, dp)
    return dp[i]= x
}
let dp2=[], n2=100;
for(let i=0;i<n2;i++){
    dp2[i]=-1;
}
console.log( reachAtTop(0, n2, dp2) )