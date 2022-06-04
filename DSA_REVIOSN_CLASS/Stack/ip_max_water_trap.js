
// https://www.geeksforgeeks.org/trapping-rain-water/

// you are given array of bulding height lengh of ith building is height of ith array you have to find 
// out (maximum) sum of all the water traped in bulding.
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
// water trap in all bulding
// let a=[3,0,0,2,4]; ------> op:10  0+3+3+1+3+0 
let a=[3,0,5,2,0,4]; 
// a=[0,1,0,2,1,0,1,3,2,1,2,1]; ---> 6;

// [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// a=[3, 0, 2, 0, 4];
// a=[4,2,0,3,2,5];
// a= [4,2,0,3,2,5];  
// 9
const leftMaxArr=(a)=>{
    // this is wrong ans
    let n=a.length;
   let left_max_ar=[], right_max_ar=[];
    let left_max=a[0];
    let final=[];
  let  lm=a[0], rm=a[n-1]
    for(let i=1; i<n; i++){
        rm= Math.max(rm,a[n-i-1]);
        lm=Math.max(lm,a[i]);
        let findMin=Math.min(rm,lm)
        // left_max_ar.push(Math.max(lm,a[i]));
        // right_max_ar.push(Math.max(rm,a[n-i-1]))
        final.push((findMin-a[i]))
    }
    let sum=final.reduce((prev,cur)=>{return(prev+cur)})
    console.log('rmm',final , 'sum', sum);
}

const waterTrap=(a)=>{
    let n=a.length;
    let rightMax=[], leftMax=[], minArray=[];
    let lm=a[0], rm=a[n-1];
    leftMax[0]=lm, rightMax[n-1]=rm;
    for(let i=1;i<n;i++){
        lm=Math.max(lm,a[i]);
        leftMax[i]=lm;
    }
    console.log('leftMax_ar', leftMax);
    for(let j=n-2;j>=0;j--){
        rm=Math.max(rm,a[j]);
        rightMax[j]=rm;
    }
    console.log('right Max', rightMax)
    for(k=0;k<n;k++){
        minArray[k]=Math.min(leftMax[k], rightMax[k])-a[k]
    }
    console.log('minArray', minArray)
    let sum=minArray.reduce((prev,cur)=>{return(prev+cur)})
    console.log('final ans : ', sum)
}

waterTrap(a)
// leftMaxArr(a)