// you given an array you have to findout frequancy of target elements in arrayAof

const lowerIndex=(ar, t)=>{
    let n=ar.length;
    let low =0, high= n-1;
    let ans=-1;
    while(low<=high){
        let mid = low + parseInt((high-low)/2);

        if(ar[mid]>=t){
            if(ar[mid]===t){
                ans=mid+1;
            }
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans
}
const highIndex=(a, t)=>{
    let n= a.length;
    let low=0, high=n-1;
    let ans=-1;
    while(low<=high){
        let mid= low + parseInt((high-low) / 2);
        if(a[mid]<=t){
            if(a[mid]===t){
                ans=mid+1;
            }
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return ans
}
let x=[1,2,3,4,5,5,5,5,5,6,7,7,8,9,10,10,10,14,16,19,20,22,24];
let t=0;
let i=highIndex(x, t)
let j=lowerIndex(x,t);

if(i==-1&&j==-1){
    console.log('elements not found in array')
}else{
    console.log(`frequancy of ${t} is : ${Math.abs(j-i)+1}`)
}
