let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate180(a) {
  let n = a.length;

  for (let i = 0; i < parseInt(n / 2); i++) {
    [a[i], a[n - i - 1]] = [a[n - i - 1], a[i]];
  }
  // console.log('first', a)
  for (let i = 0; i < parseInt(n / 2); i++) {
    a[i] = a[i].reverse();
  }
  console.log("final", a);
}
rotate180(a);
