// you are given an number set kth bit of number to 1;
// set kth bit to 1
//  27 ----> 1 1 0 1 1
// k=2 ----> 0 0 1 0 0
// ----------------------
         //  1 1 1 1 1
function setKthBit0(n,k){
    let i=1;
    i=i<<k;
    let result = n|i;
    console.log('result', result)
}
setKthBit0(27,2)

// clear kth bit
function clearBit(num, k){
    let i=1;
    i=i<<k;
    let j=~i;
    let result=num&j;
    console.log('after clearing kth bit', result)
}
clearBit(27,2)