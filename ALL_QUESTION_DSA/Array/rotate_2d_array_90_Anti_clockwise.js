// https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
// you are given matrix rotate matrix by 90 degree anti- clockwise
// https://oj.masaischool.com/contest/3944/problem/15
// Given a square matrix, turn it by 90 degrees in anti-clockwise direction without using any 
// extra space.
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// [ after rotating 90 degree
// [3,6,9],
// [2,5,8],
// [1,8,9]
// ]

const rotateBy90 = (a) => {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    a[i].reverse();
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }
  console.log(a);
};
rotateBy90(a)

console.log('first', )