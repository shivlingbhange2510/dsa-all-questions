// you are given number check if given number is power of 2;

// in this way time complexcity is O(1);
function checkPoweOFN(x){

    return(x&&!(x&(x-1)))
}

console.log(checkPoweOFN(31))

// let x=Math.power(2, n);

// let y= Math.power(2,n) - 1;
// if we do x&y we wil always get 0;
// eg  15 = 01111 , 16=10000 if we did anding of this we will get 0;
//  15 = 0 1 1 1 1
//  16 = 1 0 0 0 0
// ---------------------
// 0 =  0 0 0 0 0  
//  if we do power(2, n) && power(2,n)-1 ----> 