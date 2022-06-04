// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    if (n === 0) {
        return (-1)
    }
    return (check(nums, target, n))
};

function check(a, t, n) {

    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (a[mid] == t) {
            return (mid)
        }
        if (a[low] <= a[mid]) {
            if (t >= a[low] && t <= a[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else {
            if (t >= a[mid] && t <= a[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
    }
    return (-1);
}