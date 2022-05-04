// you are given array with 0's and 1's you have to seperate it 0 become left side and 1 become right side;
// [1,0,1,1,0,1,1,0,1,0,1,1,0]

const countAndFill=(a)=>{
    let n=a.length;
    let one=0, zero=0;
    for(let i=0;i<n;i++){
        if(a[i]==0){
            zero++;
        }else{
            one++;
        }
    }
    console.log('zero', zero, 'one', one)
    for(let k=0;k<n;k++){
        // if(a[i])
    }
}
// with help of 2 pointer TC=0(n) and SP=O(1);
const seperate0and1 =(a)=>{
    let n=a.length;
    let l=0, r=n-1;
    while(l<r){
      while(a[l]==0&&l<r){
          l++;
      }
      while(a[r]==1&&l<r){
          r--;
      }
       if(a[l]==1){
           [ a[l],a[r] ]= [ a[r],a[l] ];
           l++, r--;
       }
    }
console.log('first', a)
}
let x=[1,0,1,0,0,1];
// x= [1,0,1,1,0,1,1,0,1,0,1,1,0];
seperate0and1(x)
countAndFill(x)