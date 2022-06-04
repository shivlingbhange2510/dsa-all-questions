// https://leetcode.com/problems/search-insert-position/
// insert number in sorted array with  (log(n)) time complexcity
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let a=[...nums], t=target, n=nums.length;
    if(t<a[0]){
        return(0)
    }
    if(t>a[n-1]){
        return(n)
    }
    let low=0, high=n-1;
    let ans;
    while(low<=high){
        let mid=low + parseInt((high-low)/2);
        // 1,3,5,6 t=5;
        if(a[mid]==t){
            return(mid);
        }else if(t>a[mid]){
                 low=mid+1;
        }else{
            ans=mid;
            high=mid-1;
        }
    }
    return(ans)
};