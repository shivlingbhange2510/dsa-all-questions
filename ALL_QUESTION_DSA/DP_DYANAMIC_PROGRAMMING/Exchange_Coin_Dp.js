var dp={};
function divideNo(cur){
    if(cur<=0){
        return 0;
    }
    if(cur in dp){
        return dp[cur]
    }
   //  let x=cur;
    let x1=divideNo(parseInt(cur/2));
    let x2=divideNo(parseInt(cur/3));
    let x3=divideNo(parseInt(cur/4));
    let x = Math.max(cur,  x1+x2+x3   );
    dp[cur]=x;
    return dp[cur]
}
console.log(divideNo(12));