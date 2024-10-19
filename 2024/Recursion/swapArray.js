//  [ 2, 4 ,6,7] --> [7, 6, 4, 2]
function reverseArray(l, r, ar) {
  if (r <= l) {
    return;
  }
  reverseArray(l + 1, r - 1, swapIndex(l, r, ar));
}

function swapIndex(l, r, ar) {
  const temp = ar[l];
  ar[l] = ar[r];
  ar[r] = temp;
  return ar;
}
const ar = [5, 6, 8, 9, 56];

function reverseArrayWithSingleVariable(ar, index, n) {
  if (parseInt(n / 2) <= index) {
    console.log(" reverseArrayWithSingleVariable a ", ar);
    return;
  }
  reverseArrayWithSingleVariable(swapIndex(ar, index, n), index + 1, n);
}
function swapIndex(ar, index, n) {
  const temp = ar[index];
  ar[index] = ar[n - index];
  ar[n - index] = temp;
  return ar;
}
reverseArrayWithSingleVariable(ar, 0, ar.length - 1);
