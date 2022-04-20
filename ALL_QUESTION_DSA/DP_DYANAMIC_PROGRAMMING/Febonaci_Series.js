// with DP this is solution with dp time complexcity is O(N);
function FebSeries(n){
    let a=[];
    for(let j=0;j<=n;j++){
        a.push(0);
    }

    a[0]=0;
    a[1]=1;

    for(let i=2;i<=n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    console.log(a[n])
}

console.log(FebSeries(10))

// this program time complexcity is O(2^N);
function Feb_Series_Recursive(n){
    if(n<=1){
        return n
    }

    return Feb_Series_Recursive(n-1)+Feb_Series_Recursive(n-2)
}
console.log(Feb_Series_Recursive(8))

