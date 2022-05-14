// you are given an array search particular key in array;

const findKey = (a,key) => {
  let n = a.length;
  let low = 0,
    high = n - 1, ans=-1;
    
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if(key==a[mid]){
        return(mid+1);
        ans= mid;
    }
    else if(key>a[mid]){
        low=mid+1;
    }else{
        high= mid -1
    }
  }
  console.log('key is ', ans+1)
};
let a=[1,2,3,4,,5,6,7], k=4;
console.log('first', findKey(a,k))