function check(a) {
  if (a.length <= 1) {
    return a;
  }
  let mid = parseInt(a.length / 2);

  let x = check(a.slice(0, mid));
  let y = check(a.slice(mid));
  // console.log('kkk', x, 'yy',y);
  return merge(x, y);
  // console.log('xx', x, '\n yy', y);
}
// console.log("xx", check(d));
let ar=[21,8,9,25,34]
let d=check(ar)
console.log('final Ar', d)

function merge(a, b) {
  let n1 = a.length,
    n2 = b.length;
  let i = 0,
    j = 0,
    f = [];

  while (i < n1 && j < n2) {
    if (a[i] <= b[j]) {
      f.push(a[i]);
      i++;
    } else {
      f.push(b[j]);
      j++;
    }
  }
  while (i < n1) {
    f.push(a[i]);
    i++;
  }
  while (j < n2) {
    f.push(b[j]);
    j++;
  }
  return f;
}
