// Q) ypu are given an array find the pair whose sum is close to zero;
let a = [1, 2, 6, 9, -5, 0];
let n = a.length;
const bruteForce=(a)=>{
    let maxSum= Number.POSITIVE_INFINITY;
let a1, a2;
    for(let i=0;i<n;i++){
        for(let j=i+1; j<n;j++ ){
            sum=a[i]+a[j];
            if(sum==0){
                return(`${a[i]}, ${a[j]}`)
            }
            if(Math.abs(sum)<Math.abs(maxSum)){
                maxSum=sum;
                a1=a[i], a2=a[j];
            }
        }
    }

    return(`${a1} 'a22 r ${a2}`)
}
console.log('bb', bruteForce(a))
const with2Pointer = (a) => {
  a = a.sort((a, b) => a - b);
  let maxSum = Number.POSITIVE_INFINITY;
  let min_l = 0,
    min_r = n - 1;
  let l = 0,
    r = n - 1;
  while (l < r) {
    let sum = a[l] + a[r];
    if (Math.abs(sum) < Math.abs(maxSum)) {
      maxSum = sum;
      (min_l = a[l]), (min_r = a[r]);
    }
    if(sum<0){
        l++;
    }else{
        r--;
    }
  }
  console.log(min_l, min_r);
};
with2Pointer(a);
