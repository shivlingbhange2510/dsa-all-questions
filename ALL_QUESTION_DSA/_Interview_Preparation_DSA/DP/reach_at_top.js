// you are given step you are at  0 position you have to reach at top(end of step) 
// you can jump 1 step or 2 step so how many ways you will reach at end 
// with dp memoization time complexcity is O(n);
// space complexcity : O(n)

function reachAtTop(i,n,dp){
    if(i==n){
        return 1
    }
    if(i>n){
        return 0
    }
    if(dp[i]!=-1){
        return dp[i];
    }
    let x=reachAtTop(i+1,n,dp);
    let y=reachAtTop(i+2,n,dp);

    return dp[i]=x+y;
}

let dp2=[], n2=6;

for(let i =0;i<n2;i++){
    dp2[i]=-1
}
let u= reachAtTop(0,n2, dp2)
console.log(u)