// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending
//  position of a given target value.If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Input: nums = [5,7,7,8,8,10], target = 8
//  Output: [3,4]
var searchRange = function (nums, target) {
  let a = [...nums],
    t = target;
  let n = a.length;

  let x = lowerF(a, n, t);
  let y = upper(a, n, t);
  return [x, y];
};
function lowerF(a, n, t) {
  let low = 0,
    high = n - 1,
    ans = -1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);
    if (t == a[mid]) {
      ans = mid;
      high = mid - 1;
    } else if (t > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  // console.log(ans)
  return ans;
}
function upper(a, n, t) {
  let low = 0,
    high = n - 1,
    ans = -1;
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);
    if (t == a[mid]) {
      ans = mid;
      low = mid + 1;
    } else if (t > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
