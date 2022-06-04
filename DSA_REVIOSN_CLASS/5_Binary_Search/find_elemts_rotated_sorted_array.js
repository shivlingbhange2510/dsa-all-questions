let a = [4, 5, 6, 7, 1, 2, 3];
let n = a.length;
let k = 4;
function check() {
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = low + parseInt((high - low) / 2);
    if (a[mid] == k) {
      return mid + 1;
    }
     // it check left side sorted 
    if (a[low] <= a[mid]) {
      // below line check elemet(key) lies on left half or not
      if (k >= a[low] && k <= a[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    //  right  side sorted  
    else {
      //   // below line check elemet(key) lies on right half or not
      if (k >= a[mid] && k <= a[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    // console.log("first : ", mid)
  }
}
console.log("first 2 : ", check());
