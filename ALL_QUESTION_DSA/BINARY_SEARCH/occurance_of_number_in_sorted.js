function cal_fre(a, n, k) {
    console.log('object', argument);
    argument
    function upper_bound(a, n, k) {
        let low = 0,
            high = n - 1;
        let ans = -1;
        while (low <= high) {
            let mid = low + parseInt((high - low) / 2);
            if (a[mid] <= k) {
                low = mid + 1;
                ans = mid;
            } else {
                high = mid - 1;
            }
        }
        return ans + 1;
    }

    function lower_bound(a, n, k) {
        let l = 0,
            r = n - 1,
            ans_lb = -1;
        while (l <= r) {
            let mid = l + parseInt((r - l) / 2);

            if (a[mid] >= k) {
                if (a[mid] == k) {
                    ans_lb = mid;
                }
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans_lb + 1;
    }

    let f1 = lower_bound(a, n, k);
    let f2 = upper_bound(a, n, k);
    console.log(-f1 + f2 + 1);
}
cal_fre([2, 3, 3, 3, 6, 9], 6, 3);
