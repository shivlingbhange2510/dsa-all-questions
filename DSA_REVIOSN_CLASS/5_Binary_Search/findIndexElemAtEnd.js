// you are given an array find the key which is occured at last position;

let a = [1, 3, 4, 5, 6, 6, 6, 6, 7, 12, 34, 49];
let k = 6;
const findHighKeyIndex = (a,k) => {
  let n = a.length;
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if (a[mid] == k) {
      ans = mid;
      low = mid + 1;
    } else if (k > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log("last freq element : ", ans + 1);
};
findHighKeyIndex(a,k)