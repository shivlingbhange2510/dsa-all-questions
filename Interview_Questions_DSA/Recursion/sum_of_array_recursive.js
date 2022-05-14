let b=[1,2,3,4,5];
//  n= 5;
function sumOfArr(a,n){
    if(n==0){
        return(0);
    }
    return(sumOfArr(a, n-1)+a[n-1]);
}

console.log('first', sumOfArr(b,b.length));