// you are given an array you have to findout max sum of subarray;
// with below approach Time complexcity is O(n) and space complexcity is O(1)
let a = [-2, -3, 4, -1, -2, 1, 5, -3];
function maxSumSubAr(a) {
  let n = a.length;
  let current_sum = 0,
    max_sum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    // current_sum=a[i];
    current_sum = current_sum + a[i];

    if (current_sum > max_sum) {
      max_sum = current_sum;
    }
    if (current_sum < 0) {
      current_sum = 0;
    }
  }
  console.log("first, ", max_sum);
}

// with bruteforce approach time complexcity is O(n^3) and space complexcity is O(n)
const max_sum_bruteforce=(a)=>{
    let max_sum= Number.NEGATIVE_INFINITY;
    let n=a.length;
    for(let i=1;i<n;i++){
        let ar=[];
        for(let j=i;j<n;j++){
            ar.push(a[j])
            sum=ar.reduce((prev, cur)=>{
                return(prev + cur)
            },0)
            // console.log('ss', sum)
            if(sum>max_sum){
                max_sum = sum;
            }
        }
    }
    console.log('brute ', max_sum)
}

maxSumSubAr(a);
max_sum_bruteforce(a)