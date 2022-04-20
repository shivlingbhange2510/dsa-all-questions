//  time complaxcity for upper bound is O(log2(n)), and space compaxcity is O(1);
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
console.log(upper_bound([1,2,3,6,6,6,6,8,9,9,12,34,38,40],15, 6))