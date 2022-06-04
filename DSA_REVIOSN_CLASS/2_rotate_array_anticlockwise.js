// rotate array  k times

function rotateKtimes(a, k) {
  let n = a.length;
//   k = 2;
  k = k % n;
  let temp = [];
  for (let i = k; i < n; i++) {
    temp.push(a[i]);
  }
  for (let i = 0; i < k; i++) {
    temp.push(a[i]);
  }
  console.log("final array ", temp);
}

// with rotation method time complexcity is O(n) and space complexcity is : O(1)
const rotateKT=(a,k)=>{
    let n=a.length;
    let l=0,r=k-1;
    while(l<r){
        [a[l],a[r]]= [ a[r],a[l]];
        l++,r--;
    }
    l=k,r=n-1;
    while(l<r){
        [a[l],a[r]]= [ a[r],a[l]];
        l++,r--;
    }
   
    l=0,r=n-1;
    while(l<r) while(l<r){
        [a[l],a[r]]= [ a[r],a[l]];
        l++,r--;
    }
    console.log('final rotataion', a)
}
let  a=[1,2,3,4,5,6],k=2;
rotateKtimes(a, k);

rotateKT(a,k)