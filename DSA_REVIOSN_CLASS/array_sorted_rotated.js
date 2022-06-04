//  you are given an array find array is sorted and rotated
// https://oj.masaischool.com/contest/4024/problem/01
// 6
let a =[3,4,7,9,1,2]
console.log( fn(a, a.length))
function fn(a, n) {
  let x = 0,
    y = 0;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      x++;
    } else {
      y++;
    }
  }
  console.log("x and y here : ", x, y)
  if (x == 1 || y == 1) {
    if (a[n - 1] < a[0]) {
      x++;
    } else {
      y++;
    }
    console.log("x and y here @@ : ", x, y)

    if (x == 1 || y == 1) {
      return "YES";
    }
  }
  return "NO";
}
