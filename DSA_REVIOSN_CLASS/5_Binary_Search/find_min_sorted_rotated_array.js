 let a = [30, 40, 50, 10, 20];
let n = a.length;
let k = 40;
function findMin() {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);

    if (a[high] == a[mid]) {
      high--;
    } else if (a[mid] > a[high]) {
      low = mid + 1;
    } else{
        high= mid;
    }
  }
  return(low)
}
console.log("first", findMin())