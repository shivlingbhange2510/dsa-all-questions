//  you are given an array with n length 
// you have to find the maximum sum of subsequance in such a way that no element should be taken
// as consequance 
// [2,1,4,9,10] when we take 10 then we can't take 9 bcs they are consequance.
function maxSumSubsequanceWithoutAdjust(index, ar, n, dp) {
    if (index == 0) {
        return ar[index];
    }
    if (index < 0) {
        return 0;
    }
    if (dp[index] != -1) {
        return dp[index];
    }
    let pick = ar[index] + maxSumSubsequanceWithoutAdjust(index - 2, ar, n, dp);
    let notPic = 0 + maxSumSubsequanceWithoutAdjust(index - 1, ar, n, dp);

    

    return (dp[index] = Math.max(pick, notPic));
}
let dp2 = [], arr = [2, 1, 4, 9,10];
    n2 = arr.length;
    // create array starting fill -1 value to array
for (let i = 0; i < n2; i++) {
    dp2[i] = -1;
}

let p = maxSumSubsequanceWithoutAdjust(n2 - 1, arr, n2, dp2);
console.log("pp ", p);
