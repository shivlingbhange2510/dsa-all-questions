/*
print all subseqance in array having sum equal to target element 
*/
function findSumOfSubSequnaceIsK(index, ds, s, sum, ar, n) {
  if (index == n) {
    if (sum === s) {
      console.log("target is---->1 ", ds);
    }
    return;
  }

  ds.push(ar[index]);
  s = s + ar[index];
  findSumOfSubSequnaceIsK(index+1, ds, s, sum, ar, n);

  ds.pop();
  s = s - ar[index];

  findSumOfSubSequnaceIsK(index+1, ds, s, sum, ar, n);
}

const ar = [1,2,1];
const n=ar.length
let target = 2, tempArr=[]
index = 0;
findSumOfSubSequnaceIsK(index, [], 0, target, ar, n)
printOnlyOneSubsequance(ar, index, 0, target, n, [])

// findSum(ar,0,target,0,n,[])
// function findSum(ar, index, target, sum, n, tempAr){
//     if(index==n){
//         if(sum==target){
//             console.log('arra is -----> 2', tempAr)
//         }
//         return
//     }
//     tempAr.push(ar[index]);
//     sum= sum + ar[index];
//     findSum(ar, index+1, target, sum, n, tempAr)
//     tempAr.pop();
//     sum=sum-ar[index]
//     findSum(ar, index+1, target, sum, n, tempAr)
// }


