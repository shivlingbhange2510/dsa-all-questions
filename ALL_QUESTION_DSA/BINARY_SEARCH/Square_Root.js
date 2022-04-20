function squareRoot(n){
    let low=1 , high=n, ans=-1
    while(low<=high){
        let mid = low + parseInt((high-low) / 2);

        if(mid*mid==n){
            ans=mid;
        }
        if(mid*mid>n){
            high=mid-1;
        }else{
            low=mid+1;
            ans=mid;
        }
        
    }
    return ans
    
}
console.log(squareRoot(20))