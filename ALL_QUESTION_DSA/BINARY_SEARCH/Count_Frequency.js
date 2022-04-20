// time complexcity is 2*log2(n)
function lower_bound(a, n, k) {
    let l = 0,
        r = n - 1,
        ans_lb = -1;
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2);

        if (a[mid] >= k) {
            if (a[mid] == k) {
                ans_lb = mid;
            }
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans_lb;
}
let x =lower_bound([1,2,3,3,3,6,6,6,6,8,9,9,12,34,38,40],15, 6)

console.log( 'x is ', x)
function upper_bound(a,n,k){

    let low=0, high=n-1, check=false, ans=-1, upper_bond_val=-1;

    while(low<=high){
        let mid = low + parseInt((high-low) / 2);
      if(a[mid]<=k){
          low=mid+1;
          upper_bond_val=mid
      }else{
          high=mid-1;
      }
    }
    return low;
}
let y=(upper_bound([1,2,3,3,3,6,6,6,6,8,9,9,12,34,38,40],15, 6))
//                  1,2,3,4,5,6,7,8,9
console.log('y is ', y, 'and y-x is ',y-x)