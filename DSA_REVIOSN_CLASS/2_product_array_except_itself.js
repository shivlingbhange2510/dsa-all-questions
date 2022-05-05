// you are given array find the products of array except itself
// bruteForce TC=O(n^2), sp=O(1) if ignore answer storing array;
// b) left and right product array, TC=O(n), sp=O(n)
let a = [10, 3, 5, 6, 2];
// [180,600,360,300,900]
let n = a.length;
bruteForce(a)
function bruteForce(a){
  let ans = [];
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        prod = prod * a[j];
      }
    }
    ans.push(prod);
  }
  console.log("bruteForce : ", ans);
};
// bruteForce(a);
const leftRightProd=(a)=>{
    
let ans1=[], ans2=[];
let prod1=1, prod2=1;
ans1[0]=1, ans2[n-1]=1;
// ans1[0]=1, ans2[n-1]=1;
for(let i=0;i<n-1;i++){
  prod1=ans1[i]*a[i]
  ans1.push(prod1)
}

for(let i=n-2;i>=0;i--){
  ans2[i]=ans2[i+1]*a[i+1]
}
let ans=[];
for(let i=0;i<n;i++){
  ans.push(ans1[i]*ans2[i])
}
// console.log('ans1', ans1, '\nans2', ans2)

console.log('final answ :', ans)
}
leftRightProd(a)