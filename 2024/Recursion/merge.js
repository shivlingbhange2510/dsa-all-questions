
function mergeSort(ar, low, high){
    if(low==high){
        return
    }
    const mid = parseInt((low+high)/2);
    mergeSort(ar, low, mid);
    mergeSort(ar, mid+1, high);
   return  mergeTwoArr(ar, low,mid, high);
}
function mergeTwoArr(ar, low, mid, high){
    let result=[];
    let left = low;
    let right=mid+1;
    while(left<=mid && right<=high ){
        if(ar[left]<=ar[right]){
            result.push(ar[left]);
            left++;
        }else if(ar[right]<ar[left]){
            result.push(ar[right]);
            right++
        }
    }
    while(left<=mid){
        result.push(ar[left]);
        left++;
    }
    while(right<=high){
        result.push(ar[right]);
        right++
    }
    for(let i=low;i<=high;i++){
        ar[i] = result[i-low]
    }

    return ar
}
const ar = [2,5,2,6,7];
const low = 0, high=ar.length;
console.log(mergeSort(ar, low, high));