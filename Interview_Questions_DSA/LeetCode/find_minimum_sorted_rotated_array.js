// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let a = nums;
    let n = a.length;
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if (a[mid] == a[high]) {
            high--;
        } else if (a[mid] > a[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return a[low];
};
// Input: nums = [3,4,5,1,2]
// Output: 1
