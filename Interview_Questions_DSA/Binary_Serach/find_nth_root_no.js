//  find nth root of given number 
// Input: N=5 M=243  ------>   Output: 3
// Input: N=2 M=16   ------>   Output: 4
// Input: N=3 M=27   ------>   Output: 3

// time complexcity is -----> n*log(m)

const multiply =(num, n)=>{
    let ans2=1
    for(let i=0;i<n;i++){
        ans2=ans2*num
    }
    return ans2
}

const squareRoot =(nth, num)=>{
    // number = 16;
    let low=1, high=num-1;
let ans=-1;
    while(low<=high){
         let mid = low + parseInt((high-low) / 2);

         if(multiply(mid, nth)==num){
             return ans= mid;
         }
         if(multiply(mid, nth)<num){
             low=mid+1;
         }else{
             ans= mid
             high=mid-1;
         }
    }

    return ans
}
console.log(squareRoot(2, 1000))
