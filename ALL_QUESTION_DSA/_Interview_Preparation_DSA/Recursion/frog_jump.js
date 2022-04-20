// [30,10,60,10,60,50]
// find the min energy required to frog reach from starting to ending here energy is abs diff between
//   height (means array index) a frog can jump 1 step or 2 step from starting index
function minEnergy(indx, arr) {
    if (indx == 0) {
        return 0;
    }
    // if(dp[indx]==undefined)
    let left = minEnergy(indx - 1, arr) + Math.abs(arr[indx] - arr[indx - 1]);
    let right;
    if (indx > 1) {
        right = minEnergy(indx - 2, arr) + Math.abs(arr[indx] - arr[indx - 2]);
    } else {
        //  right = minEnergy(indx-2, arr)+ Math.abs(arr[indx]-arr[indx-2]);
        right = Number.POSITIVE_INFINITY;
    }
    return Math.min(left, right);
}

console.log("first ", minEnergy(2, [30, 10, 60]));

function withDpMixEnergy(indx, arr, dp = []) {
    let n = arr?.length;
    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = -1;
    }
    console.log("dp arr ", dp);

    for (var j = 1; j < n; j++) {
        let fs = dp[j - 1] + Math.abs(arr[j] - arr[j - 1]);
        let sc = Number.POSITIVE_INFINITY;
        if (j > 1) {
            sc = dp[j - 2] + Math.abs(arr[j] - arr[j - 2]);
        }
        dp[j] = Math.min(fs, sc);
    }
    return dp[n - 1];
}
console.log("first_dp", withDpMixEnergy(6, [30, 10, 60, 10, 60, 50, 40]), []);
