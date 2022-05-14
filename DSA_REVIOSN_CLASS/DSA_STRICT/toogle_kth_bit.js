// you are given an number toggle k-th bit of number 
function toggleKthbit(num, k){
    let i=1;
    i=i<<k;
    let result=i^num;
    console.log('after toglle kth bit', result);
}
toggleKthbit(27,3)
// 1 1 0 1 1  --->  2^4, 2^3, 2^0, 2^1, 2^1  2
// k=3 1,0,0 ---->  8   27-8=19;
// 1 0 0 1 1 ---->19