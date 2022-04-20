//  this is pure recursion method
    function fabS(n){
        if(n==1){
            return 1;
        }
        if(n==0){
            return 0;
        }
        let f= fabS(n-1)+fabS(n-2);
        return f
    }
    // console.log(fabS(100))
    // with  below is tabulation method  bottom-up method tabular approach time complaxcity is o(n) and space complaxcity is also O(n);
  function FebSeries_Tabulation_Method(n){
    let x=[];
    x[0]=0, x[1]=1;
    for(i=2;i<n;i++){
        x[i]=0;
    }
  
   for(let j=2;j<=n;j++){
       x[j]=x[j-1]+x[j-2];
     
   }
   console.log(x[n])
 
  }
    // below method is recursion + memoization(top down method) and its time conplaxcity is O(n)  this is top down method 
  function recur_dp(n,dp){
      if(n==0){
          return 0;
      }
      if(n==1){
          return 1;
      }
      if(n in dp){
          return dp[n]
      }else{
          
      }
      let x =recur_dp(n-1) + recur_dp(n-2);
      dp[n]=x;
      return x 
  }
  console.log( recur_dp(10,{}))

//   with space complaxcity O(1) and optimize solution of febonacci series;

function fabSeirs_MostOptimize_solution(n){
    let a=0,b=1;
    let c;
    for(let i=2;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    console.log(b)
} 