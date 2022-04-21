const lower_bound =(arr, target)=>{
    let n= arr.length;
    let low=0, high=n - 1;
//  [1,2,3,3,3,4,5,6,7,8,9,10,11], t=3, n=13, l=0, h=13, mid=
let ans=-1
    while(low<=high){
        let mid = low + parseInt((high-low) / 2);
      
        if(arr[mid]>=target){
            if(arr[mid]== target){
                ans=mid+1; 
               //  high =mid-1;
           }
            high= mid - 1;
        }else{
            low=mid+1;
        }
    }
    return ans
}
console.log(lower_bound([1,2,3,3,3,6,6,6,6,8,9,9,12,34,38,40], 1))