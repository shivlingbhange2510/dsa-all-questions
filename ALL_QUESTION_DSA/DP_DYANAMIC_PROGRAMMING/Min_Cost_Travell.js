function max_contiguous_subarray(arr, cur, dp) {
    if (cur < 0) {
        return 0
    }
    
    if (cur in dp) {
        return dp[cur]
    }
    
    let result = Math.max(arr[cur], arr[cur] + max_contiguous_subarray(arr, cur - 1, dp))
    dp[cur] = result
    return result
}