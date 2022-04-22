// you are given sorted and rotated array you have to find out index of element in soretd 
// and rotated array;
//  [ 4,5,6,7, 0, 1 2 3 ]
// a[mid]=7, a[low]=0, t=0
const searChInSorted=(a,num)=>{
    let n =a.length;
    let low=0, high=n-1;
    let ans = -1
    while(low<=high){
        let mid= low + parseInt((high - low) / 2);

        if(a[mid]==num){
            return ans=mid+1
        }
        // it check target element lies inside left half of array
        if(a[low]<=a[mid]){
            if(num>=a[low]&&num<=a[mid]){
                high=mid-1;
            }else{
                low=mid+1
            }
        }else{
            if(num>=a[mid]&&target<=a[high]){
                low=mid+1;
            }else{
                high=mid-1
            }
        }
    }
    return ans;
}
let x= [ 4,5,6,7, 0, 1, 2, 3 ], t=10;
console.log(searChInSorted(x, t));
