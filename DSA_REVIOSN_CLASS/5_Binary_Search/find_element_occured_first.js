// you are given an array find then index of element 0ccured at firt position
let a = [-1, 0, 1, 4, 5, 6, 6, 6, 7, 8, 9, 12, 14]; 
let k = 6;

// above question ans is 
let n = a.length;

const findLowFreEle = (a,k) => {
  let low = 0,
    high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if (a[mid] == k) {
      ans = mid + 1;
      high = mid - 1;
    } else if (k > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log("ans", ans);
};
findLowFreEle(a,k)