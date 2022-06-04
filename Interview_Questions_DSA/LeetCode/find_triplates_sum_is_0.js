// https://leetcode.com/problems/3sum/submissions/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let x = new Set();
  let a = nums;
  a = a.sort((a, b) => a - b);
  check(a, x);
  // console.log(Array.from(x))
  let p = Array.from(x);
  for (let i = 0; i < x.size; i++) {
    p[i] = JSON.parse(p[i]);
  }
  return Array.from(p);
};

function check(a, x1) {
  let count = 0;
  let n = a.length;
  if (a.length == 0) {
    return a;
  }
  for (let i = 0; i < n - 2; i++) {
    let x = a[i];
    let l = i + 1,
      r = n - 1;
    while (l < r) {
      if (x + a[l] + a[r] == 0) {
        let p = [x, a[l], a[r]];
        p = JSON.stringify(p);
        x1.add(p);
        count++;
        l++, r--;
      } else if (x + a[l] + a[r] < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
}
