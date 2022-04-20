function sumOfTriplateIsZero(arr,sum){
    let a=arr;
    a=a.sort((a,b)=>a-b);
    let n=a.length;
    for(i=0;i<n;i++){
        let sum2=sum-a[i];
        // [1,2,3,5,6,]
        // sum is 8 8-a[i]=7

        let l=i+1;
        let r=n-1;
        // a[i]+a[j]+a[k]==
        while(l<r){
            let new_sum=a[l]+a[r];
            if(sum2===new_sum){
                console.log('get target', a[l],a[r],a[i]);
                l++,r--;
            }else if(new_sum<sum){
                l++;
                console.log('less than')

            }else{
                r--;
                console.log('gretter than ')
            }
        }
    }
}
sumOfTriplateIsZero([1,-2,-3,5,6,0], 0)