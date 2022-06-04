// https://leetcode.com/problems/find-target-indices-after-sorting-array/

// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Ex

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let a = nums.sort((a, b) => a - b);
  let t = target;
  let check = true;
  let c1 = 0,
    c2 = 0;
  let n = a.length;
  let h = higher(a, n, t);
  let l = lower(a, n, t);
  let r = [];
  if (l == -1 && h == -1) {
    return [];
  }

  if (l == h) {
    return [l];
  }
  for (let i = l; i <= h; i++) {
    r.push(i);
  }

  return r;
};
function higher(a, n, t) {
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
function lower(a, n, t) {
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
  return ans;
}
