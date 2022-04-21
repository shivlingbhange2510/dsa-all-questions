// [1,  2,  3,  4,  5,  6,  7], t=6; l=0, r=6, a[mid]=4; 4>6
// you are hiven sorted  array find index of target element in array; 
const serachElement = (a, target) =>{
    let n= a.length;
    let low=0;
    let high=n-1;
    let ans=-1
    while(low<=high){
        let mid= low + parseInt((high-low)/2);
        let ans=-1;
        if(a[mid]==target){
            return mid+1;
        }
        if(a[mid]>target){
            high=mid-1;
        }else{
            low= mid+1;
        }

    }
    return ans
}
console.log(serachElement([1,2,3,4,5,6,7], 60));