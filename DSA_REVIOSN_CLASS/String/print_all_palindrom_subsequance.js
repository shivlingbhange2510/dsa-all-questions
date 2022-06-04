
function findPivot(arr, start, end){

  let mid = start + parseInt((end - start) / 2)
  if (end < start) {
    return (-1);
  }
  if (start == end) {
    return (start)
  }

  if (mid < end && arr[mid + 1] < arr[mid]) {
    return (mid);
  }
  if (mid > start && arr[mid] < arr[mid - 1]) {
    return (mid - 1);
  }

  if (arr[start] > arr[mid]) {
    return (findPivot(arr, start, mid - 1))
  }
  else {
    return (findPivot(arr, mid + 1, end))
  }
}

let a = [3, 4, 5, 1, 2];

console.log("xx", findPivot(a, 0, a.length - 1));