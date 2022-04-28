// you are given an array print alltriplates whose sum is equal to x;

// with bruteforce approach TC=O(n2) and  SP=O(1);
const bruteForce=(a, t)=>{
    let ans=false;
    let n=a.length;
    for(let i=0;i<n-2;i++){
        let sum=0;
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                sum=a[i]+a[j]+a[k];
                if(sum==t){
                    // console.log(sum, 'i,j,k', a[i],a[j],a[k])
                    return true;
                }
            }
        }
    }
  return ans
}
const two2Pointer =(a,t)=>{
    // [1,  2,  3,  4,   5]
    let ans=-1;
    let n=a.length 
    for(let i=0;i<n;i++){
        let x=a[i];
        let l=i+1, r=n - 1;
        while(l<r){
            let sum=a[i]+a[l]+a[r];
            if(sum==t){
                return ans=true;
                // console.log('first', a[i],a[l], a[r])
                l++,r++;
            }
           else if(sum<t){
                l++;
            }
            else{
                r--;
            }
        }
    }
    return ans
}
let y=[1,2,3,4,5,6,8,10,12,14,19,20], t=16;
console.log(bruteForce(y, t))
console.log(two2Pointer(y,t))