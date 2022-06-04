// https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = new Map();
  let n = nums.length;
  let t1 = target,
    a = nums;
  let ans = [];
  ans = [];
  for (let i = 0; i < n; i++) {
    let t = t1 - a[i];
    if (m.has(t)) {
      ans.push(i, m.get(t));
    } else {
      m.set(a[i], i);
    }
  }
  return ans;
};
