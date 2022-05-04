function horiz(a) {
  let n = a.length;
  let l = 0;
  let r = n - 1;
  let ans = true;
  while (l <= r) {
    if (a[l] != a[r]) {
      ans = false;
    }
    l++, r--;
  }
  console.log("first", ans);
}
let p = [".*.", "*.*", ".*."];

horiz(p);

function vert(a) {
  let n=a.length
  let ans = true;
  for (let i = 0; i < n; i++) {
    let s = a[i];
    console.log('ddddd', s)
    let r = s.length-1, l = 0;
    while (l <= r) {
      console.log('first', s[l], s[r])
      if (s[l] != s[r]) {
        //   break
        ans= false;
        break;
      }
      l++, r--;
    }
  }
  return ans;
}
let h=['nitin']
console.log('vert', vert(h))
