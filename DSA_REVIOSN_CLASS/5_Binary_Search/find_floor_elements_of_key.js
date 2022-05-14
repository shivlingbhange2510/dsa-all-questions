// you are given an array find  and first element which are less tha key
// all the elements which are less than(floor of key) key;
let a = [1,3,5,7,9,10];
let k = 4;
// in this above array key is 6 all elemets which are les than 6 are (1,3,4,5) latest value which are less than key value;
// key is 5

let n = a.length;
let low = 0,
  high = n - 1;
let ans = -1;

while (low <= high) {
  let mid = low + parseInt((high - low) / 2);

  if (k == a[mid]) {
    ans = mid;
    // high = mid - 1;
  }
 else if (k > a[mid]) {
    low = mid + 1;
  } else {
    ans = mid;
    high = mid - 1;
  }
}
console.log('ans ', ans)