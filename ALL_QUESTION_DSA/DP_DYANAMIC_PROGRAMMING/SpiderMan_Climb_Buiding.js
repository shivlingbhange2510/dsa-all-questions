// https://oj.masaischool.com/status/130431b3c6d42bc7d177db544dbab406
// Description
// There are N buildings in Bangalore, numbered 1,2,…,N. For each i (1≤i≤N), the height of building i is hi.
// After visiting Patna, Spiderman has come to visit Bangalore and as you know he has a superpower of jumping from
//  one building to the other
// He is initially on building 1. He will repeat the following action some number of times to reach building N:
// If the spiderman is currently on building i, jump to one of the following: Building i+1,i+2,…,i+K. Here, a cost of |hi−hj| is incurred, where j is the building to land on.
// (|hi - hj| is the absolute difference between the heights of buildings)

// Find the minimum possible total cost incurred before the Spiderman reaches building N.




function check(heights, k, cur, dp){
	if(cur==heights.length-1){
		return 0
	}
	if(cur>=heights.length){
		return (10000000009)
	}
	if(cur in dp){
		return dp[cur]
	}
	let ans=10000000009;
		 for (let i = 1;i <= k;i++) {
	   if (cur + i < heights.length) {
		   ans = Math.min(ans, Math.abs(heights[cur] - heights[cur + i]) + check(heights, k, cur + i, dp))
	   } else {
		   break
	   }
   }
dp[cur]=ans;
 return ans
}
    	 console.log(check([10,30,40,50,20],3,0,{}))