// https://oj.masaischool.com/status/c6f9999785e2e5bd7109267b8ed5841a
// `5 2
// 1 1 2 2 5` ans=2
// time complaxcity of binary serach is O(log(n))
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
    return ans_lb+1;
}
let a=[1,2,7,9,9,10,12];
console.log(lower_bound(a,a.length, 12))
// console.log(lower_bound([1,2,3,3,3,6,6,6,6,8,9,9,12,34,38,40],15, 40))