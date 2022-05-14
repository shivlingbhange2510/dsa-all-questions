let a = [1, 2, 3, 4, 15, 16, 100];
let n = a.length;
let low = 0,
  high = n - 1;
let k = 0;
function check(a, low, high, k) {
  let mid = low + parseInt((high - low) / 2);
  if (low <= high) {
    if (k == a[mid]) {
      return mid + 1;
    }
    if (k > a[mid]) {
      return check(a, mid + 1, high, k);
    } else {
      return check(a, low, mid - 1, k);
    }
  }
  return -1;
}

console.log(check(a, low, high, k));
