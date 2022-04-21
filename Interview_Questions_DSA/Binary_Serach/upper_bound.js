const upper_bound = (a, target) => {
  let n = a.length;
  let low = 0,
    high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if (a[mid] <= target) {
      if (a[mid] == target) {
        ans = mid+1;
      }
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }
  return ans;
};
console.log(upper_bound([1,2,3,3,3,6,6,6,6,8,9,9,12,34,38,40], 2))