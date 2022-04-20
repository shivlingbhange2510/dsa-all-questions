function maxSumOfTriplateInArray(arr,k){
    let a=arr;
    let n=a.length;
    let sum=0;
    // [1,2,3,4,5,6,]
    let maxSum=Number.NEGATIVE_INFINITY;
    for(let j=0;j<k;j++){
        sum=sum+a[j]
        
    }
    console.log('xxx ',sum)
    console.log('sum of k element is ', sum)
    for(i=k;i<n;i++){
        console.log('kk ', a[i+1])
        sum=sum - a[k-i]+a[i+1];
        console.log('sum is ', sum)
    }
}

maxSumOfTriplateInArray([1,2,3,4,5,6],3)
// 6,9,