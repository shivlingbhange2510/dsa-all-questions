// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  return check2(num, k);
};
let input=`
Example 1:
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
 `
function check2(a, k) {
  let f = [];
  let n = a.length;
  let c = 0;
  for (let i = n - 1; i >= 0; i--) {
    let s = k % 10;
    let ad = s + a[i] + c;
    if (ad >= 10) {
      c = parseInt(ad / 10);
      f.push(ad % 10);
    } else {
      f.push(ad);
      c = 0;
    }
    k = parseInt(k / 10);
  }

  while (k > 0) {
    let e = (k % 10) + c;
    if (e == 10) {
      c = parseInt(e / 10);
      f.push(e % 10);
    } else {
      f.push(e);
      c = 0;
    }
    k = parseInt(k / 10);
  }
  if (c) {
    f.push(c);
  }

  return f.reverse();
}
