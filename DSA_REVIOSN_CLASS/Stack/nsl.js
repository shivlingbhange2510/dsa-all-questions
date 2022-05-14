// nearest smaller to left;
let a = [6, 2, 5, 4, 5, 1, 2];

const nearest_small_left = (a) => {
  let n = a.length,
    ans = [],
    st = [],
    ele = -1;
  for (let i = 0; i < n; i++) {
    if (st.length == 0) {
      ans.push(ele);
    } else if (st.length > 0 && st[st.length - 1].val < a[i]) {
      ans.push(st[st.length - 1].idx);
    } else if (st.length > 0 && st[st.length - 1].val >= a[i]) {
      while (st.length > 0 && st[st.length - 1].val >= a[i]) {
        st.pop();
      }
      if (st.length == 0) {
        ans.push(-1);
      } else {
        ans.push(st[st.length - 1].idx);
      }
    }
    st.push({ val: a[i], idx: i });
  }
//   console.log("ans", ans);
  return ans;
};
let left = nearest_small_left(a);

const nearest_small_right = (a) => {
  let n = a.length,
    ans2 = [],
    st = [],
    ele = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (st.length == 0) {
      ans2.push(7);
    } else if (st.length > 0 && st[st.length - 1].val < a[i]) {
      ans2.push(st[st.length - 1].idx);
    } else if (st.length > 0 && st[st.length - 1].val >= a[i]) {
      while (st.length > 0 && st[st.length - 1].val >= a[i]) {
        st.pop();
      }
      if (st.length == 0) {
        ans2.push(n);
      } else {
        ans2.push(st[st.length - 1].idx);
      }
    }
    st.push({ val: a[i], idx: i });
  }
//   console.log("right :", ans2.reverse());
  return ans2.reverse();
};
let right = nearest_small_right(a);

// console.log("ll", left, "rr \n", right);
let width = [];
for (let i = 0; i < right.length; i++) {
  let h = right[i] - left[i] - 1;
  width.push(h * a[i]);
}
console.log("width ", Math.max(...width));
