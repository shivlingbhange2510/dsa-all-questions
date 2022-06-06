// https://www.hackerrank.com/challenges/mini-max-sum/problem

const input_op=`1 2 3 4 5
10, 14`
function miniMaxSum(arr) {
    // Write your code here
    let a=arr;
    let n=arr.length;
    let max=Number.NEGATIVE_INFINITY, min=Number.POSITIVE_INFINITY;
    let minIdx=0, maxIdx=0;
    let minSum=0, maxSum=0;
    for(let i=0;i<n;i++){
        if(a[i]<min){
            min=a[i];
            minIdx=i;
        }
        if(a[i]>max){
            max=a[i]
            maxIdx=i;
        }
    }
    for(let i=0;i<n;i++){
        if(i!=maxIdx){
            minSum=minSum+a[i];
        }
        if(i!=minIdx){
            maxSum=maxSum + a[i];
        }
    }
    console.log(`${minSum} ${maxSum}`)
    // console.log(`hii`)
}
