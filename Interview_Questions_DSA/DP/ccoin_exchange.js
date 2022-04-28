// Given an array, A of m denominations of coins and given an amount n, find a number of
//  unique ways to make the change from the given coin types.
// [1,2,3] ---> t=4

// https://oj.masaischool.com/contest/2778/problem/03 ----> for some testcaseS it gives partially accepted;
const coinExchangeRec=(a,t, idx)=>{
    if(idx==0){
        return(t%a[idx]==0);
    }
    
   let notTake=coinExchangeRec(a,t,idx-1);
   
   let take=0
   if(a[idx]<=t){
      take= coinExchangeRec(a,t-a[idx], idx)
   }
   return(notTake + take);
}

const coinExchange =(idx, t,a,dp )=>{
    if(idx==0){
        return(t%a[0]==0)
    }

    let notTake =  coinExchange(idx-1, t, a, dp);
    let take=0;
    if(dp[idx][t]!=undefined){
        return dp[idx]
    }
    if(a[idx]<=t){
        take=coinExchange(idx, t-a[idx], a, dp)
    }
    let y= take + notTake ;
    // console.log('y', y)
    return dp[idx][t]=y
}

let a=[1,2,3];
let t=4;
let dp= new Array(t);
dp.fill(-1)
console.log('first', coinExchange(a.length-1, t, a, dp))
console.log('second ', coinExchangeRec(a,t, idx=a.length))