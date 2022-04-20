console.log('hii')
// find all triplates whoes sum is equal to sum`
//X=18   (1,6,11)
a=[1,2,3,4,5,6,7,8]
// l=0, r=a.length-1;
let sum=8;
n=a.length, count=0;
//  sum=a[i] +a[j]+a[k];
//sum_2=sum-a[i]  from first for loop we get 8-1=7 from remaining element we find sum =7 by using 2 pointer if we 
//if sum with 1 is not present then we move a[i]=2 wwe find 2 + (remaing 2 element sum is 6)....so on.

for(i=0;i<n;i++){
    let sum_2=sum -a[i];
    console.log('x1111 ', sum_2)
  

console.log('x222 ', sum_2)

  
   // console.log(a[i])
l=i+1, r=n-1;
    while(l<r){

        if(a[l]+a[r]>sum_2){
            r--;
        }
        if(a[l]+a[r]<sum_2){
            l++;
        }
        if(a[l]+a[r]===sum_2){
            count++;
            console.log(a[i], a[l], a[r])
            l++, r--;
        }

    }
}
console.log(count)

// before initialize variable  var left = i + 1;
// do sum2=sum-a[i]; and in while loop do a[l]+a[r]==sum2