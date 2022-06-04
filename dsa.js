
let x = [9, -4, 2, 01, -9];
function maxArprodu(a) {
  let cur_max = a[0], cur_min = [0];
  let prev_max = a[0], prev_min = a[0], ans = a[0];
  let n = a.length;
  for (let i = 1; i < n; i++) {

    cur_max = Math.max(prev_min * a[i], prev_max * a[i], a[i]);
    cur_min = Math.min(prev_min * a[i], prev_max * a[i], a[i]);
    ans = Math.max(cur_max, ans);
    prev_max = cur_max, prev_min = cur_min;
  }
  console.log("first", ans);
}
// maxArprodu(x)
function seperate(a) {
  let n = a.length;
  let l = 0, r = n - 1;
  while (l < r) {
    while (a[l] == 0 && l < r) {
      l++;
    }
    while (a[r] == 1 && l < r) {
      r--;
    }
    if (a[l] = 1) {
      [a[l], a[r]] = [a[r], a[l]];
      r--;
      // l++;
    } else {
      // l++
    }
  }
  console.log("seperate : ", a)
}
function triplate(a) {
  let n = a.length;
  let l = 0, h = n - 1, m = 0;
  while (m <= h) {
    // [1,0,1]
    if (a[m] == 0) {
      [a[l], a[m]] = [a[m], a[l]];
      l++, m++
    } else if (a[m] == 2) {
      [a[m], a[h]] = [a[h], a[m]];
      h--;
    } else {
      m++;
    }
  }
  console.log("triplate : ", a);
}
let t = [1, 0, 2, 1, 0, 2, 1, 1, 00, 0];
// triplate(t)
let s = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
// seperate(s)

function findMej(a) {
  let n = a.length;
  let index = 0, count = 1;

  for (let i = 1; i < n; i++) {
    if (a[index] == a[i]) {
      count++;
    } else {
      count--;
    }
    if (count <= 0) {
      count = 1, index = i;
    }
  }
  console.log("Index : ", index, "val : ", a[index], 'len : ', n)
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    //  const element = array[i];
    if (a[index] == a[i]) {
      c++;
    }

  }
  console.log("FFF",c>=parseInt(n / 2 +1) ?  c : -1)
}
let m = [1, 2,4, 3, 4, 5, 4, 4, 4, 1, 4]
findMej(m)