let a=[1,2,3,4,8,10,10,12,29];
let key=6;
let n=a.length, low=0, high=n-1;

function ceilValue(a,low, high,key){
    // let n=a.length, low=0, high=n-1;
while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if(a[mid]==key){
        return(mid+1);
    }else if(key>a[mid]){
        ans= mid;
        low = mid + 1;
    }else {
        high = mid - 1
    }
}
return(ans+1)
}

console.log( ceilValue(a,low, high,key) );