// you are given array you have to find max sum of k consecative  elements of array;
// https://takeuforward.org/data-structure/sliding-window-technique/
function kElemetSum(a, k) {
    let max=Number.NEGATIVE_INFINITY
    let n = a.length;
    let sum2=0, sum=0;
    for(let p=0;p<k;p++){
        sum2=sum2+a[p];
    }
    sum=sum2;
    max=Math.max(max, sum)
    // console.log('sum2 : ', sum2)
    for (let i = k; i <n; i++) {
        sum=sum-a[i-k]+a[i]
        max=Math.max(max, sum)
        // console.log(sum2-a[i])
        // console.log('sum : ', sum, 'a[i-k', a[i-k], 'a[i-1]',a[i])
    }
    console.log(max)
}

kElemetSum([20,2,3,30,6],3 )